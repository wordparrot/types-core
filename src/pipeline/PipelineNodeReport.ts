import { PipelineNode, PipelineJob } from ".";
import { PipelineMessage } from "./PipelineMessage";
import { PipelineToken } from "./PipelineToken";
import { RepositoryFile } from "../repository";
import { RepositoryItem } from "../repository";
import { CsvMetadata } from "../csv";
import { FileMetadata } from "./FileMetadata";
import { PipelineOperationFailed } from "./PipelineOperationFailed";
import { EmailMetadata } from "./EmailMetadata";
import { Prompt, PromptToPassOn, PromptInstance } from "../prompt";
import { DynamicServiceBodyContext } from "../dynamic-service";

export interface PipelineNodeReport {
  id?: string;
  status: string;
  errorMessage?: string;
  pipelineNodeId: string;
  pipelineJobId: string;
  provider: string;

  toPassOn: {
    messages: PipelineMessage[];
    messagesTotal: number;
    tokens: PipelineToken[];
    tokensTotal: number;

    csv: CsvMetadata[];
    csvTotal: number;
    emailMetadata: EmailMetadata[];
    emailMetadataTotal: number;
    fileMetadata: FileMetadata[];
    fileMetadataTotal: number;
    items: RepositoryItem[];
    itemsTotal: number;
    json: Record<string, any>[];
    jsonTotal: number;
    prompts: PromptToPassOn[];
    promptsTotal: number;

    context: DynamicServiceBodyContext;

    operationsFailed: PipelineOperationFailed[];
    operationsFailedTotal: number;
  };
  diff: {
    messagesToPassOn: PipelineMessage[];
    messagesToPassOnTotal: number;
    tokensToPassOn: PipelineToken[];
    tokensToPassOnTotal: number;

    csvToPassOn: CsvMetadata[];
    csvToPassOnTotal: number;
    csvDeleted: CsvMetadata[];
    csvDeletedTotal: number;
    emailMetadataToPassOn: EmailMetadata[];
    emailMetadataToPassOnTotal: number;
    fileMetadataToPassOn: FileMetadata[];
    fileMetadataToPassOnTotal: number;
    fileMetadataDeleted: FileMetadata[];
    fileMetadataDeletedTotal: number;
    itemsToPassOn: RepositoryItem[];
    itemsToPassOnTotal: number;
    itemsDeleted: RepositoryItem[];
    itemsDeletedTotal: number;
    jsonToPassOn: any[];
    jsonToPassOnTotal: number;
    jsonDeleted: any[];
    jsonDeletedTotal: number;
    promptsToPassOn: PromptToPassOn[];
    promptsToPassOnTotal: number;
    promptsDeleted: any[];
    promptsDeletedTotal: number;
    promptInstancesToPassOn: PromptInstance[];
    promptInstancesToPassOnTotal: number;

    contextToPassOn: DynamicServiceBodyContext;

    operationsFailed: PipelineOperationFailed[];
    operationsFailedTotal: number;
  };

  toRepository?: {
    repositoryId: string;
    items: string[];
    itemsTotal: number;
    files: string[];
    filesTotal: number;
    csv: string[];
    csvTotal: number;
  };

  pipelineNode?: PipelineNode;
  pipelineJob?: PipelineJob;

  downstreamPipelineEvents?: string[];

  createdAt?: string;
  updatedAt?: string;
}
