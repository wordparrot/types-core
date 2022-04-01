import {
  WriteFileOptions,
  mkdir,
  readFile,
  rm,
  stat,
  unlink,
  writeFile,
} from 'fs'
import { isInteger } from 'lodash'
import { promisify } from 'util'

import { FileOperation } from '..'
import { FileMetadata } from '..'
import {
  getExtension,
  getFilenameBase,
  replaceStringIndexAt,
} from '..'

const readFilePromisified = promisify(readFile)
const writeFilePromisified = promisify(writeFile)
const deleteFilePromisified = promisify(unlink)
const statPromisified = promisify(stat)
const mkdirPromisified = promisify(mkdir)
const rmdirPromisified = promisify(rm)


export interface FileUtilityConfig {
  uniqId?: string
  pipelineJobId?: string
  pipelineNodeId?: string
  filename: string
  buffer?: Buffer
  mimeType?: string
  repositoryId?: string
  parentRepositoryItem?: {
    nodeUniqId: string
    uniqId: string
  }
}

export class FileUtility {
  pipelineJobId: string
  pipelineNodeId: string
  filename: string
  buffer?: Buffer
  mimeType?: string
  extension: string
  repositoryId: string
  uniqId: string
  parentRepositoryItem?: {
    nodeUniqId: string
    uniqId: string
  }

  public tempFolder = `${process.cwd()}/content/temp`
  public repositoriesFolder = `${process.cwd()}/content/repositories`

  constructor(config: FileUtilityConfig) {
    this.uniqId = config.uniqId
    this.pipelineJobId = config.pipelineJobId
    this.pipelineNodeId = config.pipelineNodeId
    this.filename = config.filename
    this.buffer = config.buffer

    this.extension = getExtension(this.filename)
    this.mimeType = config.mimeType
    this.repositoryId = config.repositoryId
    this.parentRepositoryItem = config.parentRepositoryItem
  }

  get jobPath(): string {
    return `${this.tempFolder}/${this.pipelineJobId}`
  }

  get nodePath(): string {
    return `${this.jobPath}/${this.pipelineNodeId}`
  }

  get filePath(): string {
    return `${this.nodePath}/${this.filename}`
  }

  get repositoriesPath(): string {
    return `${this.repositoriesFolder}/${this.repositoryId}`
  }

  get repositoriesFilePath(): string {
    if (!this.filename) {
      throw new Error('Cannot get repository file path: filename required.')
    }

    if (!this.repositoryId) {
      throw new Error('Cannot get repository file path: repository ID required.')
    }

    return `${this.repositoriesFolder}/${this.repositoryId}/${this.filename}`
  }

  async saveToTemp(encoding: WriteFileOptions = 'utf8'): Promise<FileMetadata> {
    await this.createNodeTempFolders()
    await this.writeToTempFolder(encoding)
    return {
      uniqId:
        this.uniqId ||
        `${this.pipelineJobId}_${this.pipelineNodeId}_${this.filename}`,
      filename: this.filename,
      path: this.filePath,
      type: getExtension(this.filename),
      mimeType: this.mimeType,
      pipelineJobId: this.pipelineJobId,
      pipelineNodeId: this.pipelineNodeId,
      parentRepositoryItem: this.parentRepositoryItem,
    }
  }

  private async createNodeTempFolders() {
    try {
      await statPromisified(this.jobPath)
    } catch (e) {
      // This folder does not exist yet
      try {
        await mkdirPromisified(this.jobPath)
      } catch (e) {
        console.log(e)
        // This folder does not exist yet
        throw new Error('cannot_make_temp_job_folder')
      }
    }

    try {
      await statPromisified(this.nodePath)
    } catch (e) {
      // This folder does not exist yet
      try {
        await mkdirPromisified(this.nodePath)
      } catch (e) {
        console.log(e)
        // This folder does not exist yet
        throw new Error('cannot_make_temp_node_folder')
      }
    }
  }

  private async writeToTempFolder(encoding: WriteFileOptions = 'utf8') {
    return writeFilePromisified(this.filePath, this.buffer, encoding)
  }

  async createRepositoryFolder() {
    try {
      await statPromisified(this.repositoriesPath)
    } catch (e) {
      // This folder does not exist yet
      try {
        await mkdirPromisified(this.repositoriesPath)
      } catch (e) {
        console.log(e)
        // This folder does not exist yet
        throw new Error('cannot_make_repositories_folder')
      }
    }
  }

  private async retrieveBufferFromTemp() {
    return readFilePromisified(this.filePath)
  }

  async saveTempToRepositoryFolder(
    encoding: WriteFileOptions = 'utf8',
    buffer?: Buffer
  ): Promise<FileOperation> {
    try {
      if (!this.buffer) {
        buffer = await this.retrieveBufferFromTemp()
      }
    } catch (e) {
      return {
        path: this.repositoriesFilePath,
        filename: this.filename,
        operation: 'save',
        success: false,
      }
    }

    try {
      if (!this.repositoriesPath) {
        throw new Error('repositories_path_not_set')
      }

      try {
        await statPromisified(this.repositoriesFilePath)
        // File by this name already exists, increment copy number
        this.incrementCopyNumber()

        await writeFilePromisified(this.repositoriesFilePath, buffer, encoding)

        return {
          path: this.repositoriesFilePath,
          filename: this.filename,
          operation: 'save',
          success: true,
        }
      } catch (e) {
        // file does not exist
        try {
          await writeFilePromisified(
            this.repositoriesFilePath,
            buffer,
            encoding
          )
          return {
            path: this.repositoriesFilePath,
            filename: this.filename,
            operation: 'save',
            success: true,
          }
        } catch (e) {
          console.log(e)
          throw new Error('unable_to_save')
        }
      }
    } catch (e) {
      return {
        path: this.repositoriesFilePath,
        filename: this.filename,
        operation: 'save',
        error: e.message,
        success: false,
      }
    }
  }

  async deleteFromRepositoryFolder(): Promise<FileOperation> {
    try {
      if (!this.repositoriesPath) {
        throw new Error('repositories_path_not_set')
      }

      try {
        await deleteFilePromisified(this.repositoriesFilePath)
      } catch (e) {
        throw new Error('unable_to_delete')
      }

      return {
        path: this.repositoriesFilePath,
        filename: this.filename,
        operation: 'delete',
        success: true,
      }
    } catch (e) {
      return {
        path: this.repositoriesFilePath,
        filename: this.filename,
        operation: 'delete',
        error: e.message,
        success: false,
      }
    }
  }

  removeNodeFolder() {
    return rmdirPromisified(this.nodePath, { recursive: true })
  }

  // Change filename.txt to filename(1).txt
  incrementCopyNumber(): void {
    let filenameBase = getFilenameBase(this.filename)

    if (this.hasCopyNumber(filenameBase)) {
      const int = parseInt(filenameBase[filenameBase.length - 2])
      filenameBase = replaceStringIndexAt(
        filenameBase,
        filenameBase.length - 2,
        (int + 1).toString()
      )
      this.filename = filenameBase + '.' + getExtension(this.filename)
    } else {
      this.filename =
        filenameBase +
        `(${Math.floor(Date.now() / 1000)}).` +
        getExtension(this.filename)
    }
  }

  hasCopyNumber(str: string): boolean {
    if (str.length <= 3) {
      return false
    }
    if (str[str.length - 1] !== ')') {
      return false
    }
    if (!isInteger(str[str.length - 2])) {
      return false
    }
    if (str[str.length - 3] !== '(') {
      return false
    }

    return true
  }

}
