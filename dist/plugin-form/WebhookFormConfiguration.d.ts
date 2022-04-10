import { BaseFormConfiguration } from '.';
import { WebhookInitialValues } from '.';
import { ActionValidationSchemaItem } from '.';
import { ActionFieldItem } from '.';
export declare type WebhookMethod = ('head' | 'options' | 'get' | 'post' | 'put' | 'patch' | 'delete');
export interface WebhookFormConfiguration extends BaseFormConfiguration {
    initialValues: WebhookInitialValues;
    validationSchema: ActionValidationSchemaItem[];
    fields: ActionFieldItem[];
    methods: WebhookMethod[];
}