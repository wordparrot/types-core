import { User } from "..";
import { PipelineNode } from "..";
import { EntryItem } from "..";
import { AuthCallbackStatus } from "..";
import { CredentialForm } from ".";

export interface BaseCredentialTerms {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  authType: string;
  tokenSecret: string;
  timestamp: number;
  tokenExpiration: number;
  expiresIn: number;
  appId: string;
  appSecret: string;
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  status: AuthCallbackStatus;
  values: Record<string, any>;
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

  providerConfig: any;

  apiKey: string;

  scopes: string[];

  authURI: string;
  redirectURI: string;
  redirectId: string;
  redirectTimestamp: number;
  hasAuthCallback: boolean;
  hasTest: boolean;
  authMethod: string;
  authResponse: string;
  restrictions: string[];
  useServiceAccount: boolean;
  default: boolean;

  rootFolderId: string;

  user: User;
  nodes: PipelineNode[];
  entryItems: EntryItem[];
  forms?: CredentialForm[];

  createdAt: string;
  updatedAt: string;
}

export interface UpdateCredential {
  credentialId: string;
  accessToken?: string;
  refreshToken?: string;
  tokenType?: string;
  scopes?: string[];
  values?: Record<string, any>;
}
