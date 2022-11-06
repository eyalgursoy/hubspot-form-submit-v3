interface HubSpotField {
    name: string;
    value: any;
    objectTypeId?: string;
}
interface HubSpotContext {
    hutk?: string;
    ipAddress?: string;
    pageName?: string;
    pageUri?: string;
    pageId?: string;
    sfdcCampaignId?: string;
    goToWebinarWebinarKey?: string;
}
interface HubSpotData {
    fields: HubSpotField[];
    context?: HubSpotContext;
    submittedAt?: number;
}
interface FinalHubSpotData extends HubSpotData {
    portalId: string;
    formGuid: string;
}
declare type SubmitStatus = 'error' | 'success';
declare type FormSubmitError = {
    message: string;
    errorType: string;
};
declare type FormSubmitResponse = {
    status: SubmitStatus;
    message?: string;
    errors?: FormSubmitError[];
};
export type { HubSpotField, HubSpotContext, HubSpotData, FinalHubSpotData, FormSubmitResponse };
