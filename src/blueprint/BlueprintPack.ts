import { FieldDescriptor } from "..";

export interface FormDataItem {
  id: string;
  title: string;
  content: string;
  type: string;
  requiredCredentials: string[] | null;
}

export interface OtherFormDataItem extends FormDataItem {
  values: any;
  isValid: boolean;
  descriptors?: FieldDescriptor[];
}

export interface PipelineFormDataInnerValue {
  index: number;
  isValid: boolean;
  values: any;
  descriptors?: FieldDescriptor[];
}

export interface PipelineFormDataItem extends FormDataItem {
  type: "pipeline";
  inner: Record<string, PipelineFormDataInnerValue>;
  allReady: boolean;
}

export interface WebhookFormDataItem extends OtherFormDataItem {
  type: "webhook";
}

export interface ListenerFormDataItem extends OtherFormDataItem {
  type: "listener";
}

export interface PromptFormDataItem extends OtherFormDataItem {
  type: "prompt";
}

export interface PipelineFormDataItemToChange {
  id: string;
  title: string;
  nodeTitle: string;
  index: number;
  innerValue: PipelineFormDataInnerValue;
  allReady: boolean;
}

export interface WebhookFormDataItemToChange extends OtherFormDataItem {
  id: string;
  title: string;
  index: number;
  isValid: boolean;
  values: any;
}

export type ListenerFormDataItemToChange = WebhookFormDataItemToChange;

export type FormDataMap = Record<
  string,
  OtherFormDataItem | PipelineFormDataItem
>;

export type PipelineFormDataMap = Record<string, PipelineFormDataItem>;

export type PromptFormDataMap = Record<string, PromptFormDataItem>;

export type WebhookFormDataMap = Record<string, WebhookFormDataItem>;

export type ListenerFormDataMap = Record<string, ListenerFormDataItem>;
