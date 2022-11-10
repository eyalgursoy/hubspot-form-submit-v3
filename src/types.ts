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
  // legalConsentOptions?: HubSpotLegalConsentOptions;
}

interface FinalHubspotData extends HubspotData {
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

export type {
  HubspotField,
  HubspotContext,
  HubspotData,
  FinalHubspotData,
  FormSubmitResponse,
  SubmitStatus,
  FormSubmitError,
};
