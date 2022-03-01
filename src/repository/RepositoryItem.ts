import { RepositoryTag, RepositoryFile } from ".";

export interface RepositoryItem {
    id: string
    nodeUniqId?: string
    authorId?: string
    authorName?: string
    __wpsf_?: boolean
    type: string
    provider: string
    platform: string
    format: string
    uniqId: string
    groupId: string
    originalCreatedAt: string
    title: string
    content?: string
    thumbnail?: string
    permalink?: string
    url?: string
    youtube?: string
    array?: string[]
    json?: string
    views?: number
    repositoryId?: string
    repositoryTags?: RepositoryTag[]
    repositoryFiles?: RepositoryFile[]
    language?: string
    location?: string
    subtype?: string
    rank?: string
  
    createdAt?: string
    updatedAt?: string
  }