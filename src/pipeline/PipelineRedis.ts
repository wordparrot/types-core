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
  upstreamErrors: string[];
  upstreamDisabled: string[];
  upstreamConditionFailed: string[];
  recordReports: boolean;
  hasDownstreamPipelines: boolean;
}
