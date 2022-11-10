interface HubspotField {
    name: string;
    value: any;
    objectTypeId?: string;
}
interface HubspotContext {
    hutk?: string;
    ipAddress?: string;
    pageName?: string;
    pageUri?: string;
    pageId?: string;
    sfdcCampaignId?: string;
    goToWebinarWebinarKey?: string;
}
interface HubspotData {
    fields: HubspotField[];
    context?: HubspotContext;
    submittedAt?: number;
}
interface FinalHubspotData extends HubspotData {
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
export type { HubspotField, HubspotContext, HubspotData, FinalHubspotData, FormSubmitResponse, SubmitStatus, FormSubmitError, };
