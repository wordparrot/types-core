import { BlueprintEntityRequirementMap, PipelineNode } from "..";
import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { InitialValues } from "..";
import { FieldStatusMap } from "..";

export interface BlueprintPipelineNode {
  id: string;
  parentNodeId: string | null;
  linkedNodeId: string | null;
  title: string;
  content: string;

  initialValues: InitialValues;
  fields?: FieldItem[];
  validationSchema?: ValidationSchemaItem[];
  fieldStatusMap: FieldStatusMap;
  requirementMap: BlueprintEntityRequirementMap;

  downstreamPipelines?: string[];
}
