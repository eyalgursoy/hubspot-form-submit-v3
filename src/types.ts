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
  // legalConsentOptions?: HubSpotLegalConsentOptions;
}

interface FinalHubSpotData extends HubSpotData {
  portalId: string;
  formGuid: string;
}

type SubmitStatus = 'error' | 'success';
type FormSubmitError = {
  message: string;
  errorType: string;
};

type FormSubmitResponse = {
  status: SubmitStatus;
  message?: string;
  errors?: FormSubmitError[];
};

export type { HubSpotField, HubSpotContext, HubSpotData, FinalHubSpotData, FormSubmitResponse };
