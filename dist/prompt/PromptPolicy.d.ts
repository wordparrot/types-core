export interface PromptPolicy {
    id: string;
    urlName: string;
    enableDownloads: boolean;
    enableUploads: boolean;
    publicInstances: boolean;
    requireAuth: boolean;
    restrictedRecipients: boolean;
    requireAllResponses: boolean;
    viewAfterSubmit: boolean;
    schema: any;
    uiSchema: any;
    createdAt: string;
    updatedAt: string;
}