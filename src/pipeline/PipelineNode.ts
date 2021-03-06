import { Pipeline, PipelineNodeCondition } from ".";
import { Repository, RepositoryTag } from "..";
import { FeaturedThread } from "..";
import { Credential } from "..";
import { Category } from "..";
import { FeaturedGroup } from "..";
import { Subcategory } from "..";
import { Entry } from "..";
import { JsonTransformation } from "..";
import { Csv } from "..";
import { CsvReport } from "..";
import { DataStore } from "..";
import { Prompt } from "..";

export interface PipelineNode {
  id: string;
  title: string;
  content: string;
  nodeStatus: string;
  status: string;
  provider: string;
  type: string;

  values: Record<string, any>;
  transformations: JsonTransformation[];
  prospectiveTitle: string;
  prospectiveContent: string;
  text: string;
  color: string;
  background: string;
  subtype: string;
  functionName: string;
  emailAddresses: string;
  group: string;
  subgroup: string;
  to: string;
  from: string;
  domain: string;
  url: string;
  path: string;
  language: string;
  location: string;
  action: string;
  mode: string;
  method: string;
  identifier: string;
  properties: string;
  topic: string;
  search: string;
  select: string;
  sort: string;
  limit: number;
  skip: number;
  date: number;
  whitelistCSV: string;
  blacklistCSV: string;
  page: number;

  pipeline: Pipeline;
  pipelineId: string;

  linkedNode: PipelineNode;
  linkedNodeId: string;

  csv: Csv;
  csvId: string;

  prompt: Prompt;
  promptId: string;

  csvReport: CsvReport;
  csvReportId: string;

  dataStore: DataStore;
  dataStoreId: string;

  category: Category;
  subcategory: Subcategory;
  featuredGroup: FeaturedGroup;
  featuredGroupId: string;
  featuredThreads: FeaturedThread[];
  featuredThreadIds: string[];
  credential: Credential;
  credentialId: string;
  repository: Repository;
  repositoryId: string;
  repositoryTagIds: string[];
  parentNode: PipelineNode;
  parentNodeId: string;
  childNodes: PipelineNode[];
  conditions: PipelineNodeCondition[];
  entries: Entry[];

  downstreamPipelines?: Pipeline[];

  createdAt: string;
  updatedAt: string;
}
