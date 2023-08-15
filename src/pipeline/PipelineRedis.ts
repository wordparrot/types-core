export interface PipelineRedis {
  title: string;
  content: string;
  siteId: string;
  pipelineId: string;
  pipelineJobId: string;
  featuredGroupId: string;
  featuredThreadId: string;
  featuredThreadReleaseId: string;
  pipelineJobSequenceId: string;
  upstreamPipelineJobId: string;
  linkedRedisKey?: string;
  progressVisualMap?: Record<string, string>;
  timeToRun: number;
  currentIndex: number;
  pipelinesByLevel?: string[];
  nodesByLevel: string[][];
  parentNodeMap: Record<string, string[]>;
  nodeTitles: Record<string, string>;
  remaining: string[];
  pipelineStatus: string;
  runOnce?: boolean;
  dataStatus: string;
  upstreamErrors: string[];
  upstreamDisabled: string[];
  upstreamConditionFailed: string[];

  eventFromPromptId?: string;
  eventFromPromptInstanceId?: string;
  eventFromPromptRecipientId?: string;
  eventFromListenerId?: string;
  eventFromWebhookId?: string;
  eventFromHttpOrigin?: string;
  eventFromHttpRequest?: string;
  eventFromPipelineId?: string;
  eventFromPipelineNodeId?: string;

  recordReports: boolean;
  hasDownstreamPipelines: boolean;
  batchProcesses?: Record<string, string>;
  resolvedProcesses?: Record<string, string>;
  erroredProcesses?: Record<string, string>;
}
