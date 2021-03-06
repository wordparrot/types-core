import { HubPluginVersion } from ".";

export interface HubPlugin {
    id: string
    author: string
    name: string
    title: string
    content: string
    active?: boolean
    description?: string
    version: string
    image: any
    logo: string
    platform?: string
    website?: string
    size?: number
    language?: string
    repository?: string
    contactName?: string
    contactEmail?: string
    license?: string
    privacyPolicy?: string
    hubPluginVersions: HubPluginVersion[]
}