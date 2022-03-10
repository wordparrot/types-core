import { RepositoryTag, RepositoryFile } from "."
import { Credential } from '..'
import { PipelineJob } from ".."
import { Repository } from ".."
import { Entry } from '..'
import { FeaturedThreadRelease } from ".."
import { PipelineFlow } from ".."

export interface RepositoryItem {
    id: string
    uniqId: string
    nodeUniqId: string
    collectionId: string
    __wpsf_: boolean
    title: string
    content: string
    
    groupId?: string
    authorId: string
    authorName: string
    authorScreenName: string
    
    type: string
    subtype: string
    provider: string
    platform: string
    format: string
    image: string
    media: string
    thumbnail: string
    permalink: string
    url: string
    youtube: string
    array: string[]
    views: number
    language: string
    location: string
    rank: string
    references: string[]
    group: string
    subgroup: string

    credential: Credential
    pipelineJob: PipelineJob
    repository: Repository
    entries: Entry[]
    repositoryTags: RepositoryTag[]
    repositoryFiles: RepositoryFile[]
    featuredThreadRelease: FeaturedThreadRelease
    pipelineFlow: PipelineFlow
    json: any

    originalCreatedAt: string
    createdAt: string
    updatedAt: string
}