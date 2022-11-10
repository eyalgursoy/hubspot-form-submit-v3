import { FinalHubspotData, FormSubmitResponse, HubspotContext, HubspotData, HubspotField } from './types';
declare const hubspotFormSubmit: (portalId: string, formGuid: string, fields: HubspotField[], context?: HubspotContext) => Promise<FormSubmitResponse>;
export type { HubspotField, HubspotContext, HubspotData, FinalHubspotData };
export default hubspotFormSubmit;
