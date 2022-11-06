import { FinalHubSpotData, FormSubmitResponse, HubSpotContext, HubSpotData, HubSpotField } from './types';
declare const hubspotFormSubmit: (portalId: string, formGuid: string, fields: HubSpotField[], context?: HubSpotContext) => Promise<FormSubmitResponse>;
export type { HubSpotField, HubSpotContext, HubSpotData, FinalHubSpotData };
export default hubspotFormSubmit;
