import { PipelineNode } from "..";
import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { InitialValues } from "..";

export interface BlueprintPipelineNode {
  title: string;
  content: string;

  initialValues: InitialValues;
  fields?: FieldItem[];
  validationSchema?: ValidationSchemaItem[];

  parentNodeTitle: string | null;
  downstreamPipelines?: string[];
}
