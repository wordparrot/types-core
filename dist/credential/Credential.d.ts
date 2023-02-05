import { User } from "..";
import { PipelineNode } from "..";
import { EntryItem } from "..";
import { AuthCallbackStatus } from "..";
import { CredentialQRCode } from ".";
export interface BaseCredentialTerms {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    authType: string;
    tokenSecret: string;
    timestamp: number;
    expiresAt: string;
    clientId: string;
    clientSecret: string;
    username: string;
    password: string;
    status: AuthCallbackStatus;
}
export interface Credential extends BaseCredentialTerms {
    id: string;
    title: string;
    content: string;
    provider: string;
    platform: string;
    projectName: string;
    domain: string;
    url: string;
    credentialName: string;
    type: string;
    values: Record<string, any>;
    providerConfig: any;
    apiKey: string;
    scopes: string[];
    rootFolderId: string;
    redirectURI: string;
    redirectId: string;
    redirectTimestamp: number;
    hasAuthCallback: boolean;
    hasAuthTest: boolean;
    authMethod: string;
    authResponse: string;
    restrictions: string[];
    useServiceAccount: boolean;
    default: boolean;
    storage: any;
    user: User;
    nodes: PipelineNode[];
    entryItems: EntryItem[];
    qrCodes?: CredentialQRCode[];
    createdAt: string;
    updatedAt: string;
}
export interface UpdateCredential {
    credentialId: string;
    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    scopes?: string[];
}
