import { FinalHubSpotData, FormSubmitResponse, HubSpotContext, HubSpotField } from './types';
export declare const validateRequiredParameter: (parameterName: string, parameterValue: any) => void;
export declare const validateHubspotCookie: () => string;
export declare const collectFormData: (portalId: string, formGuid: string, fields: HubSpotField[], context?: HubSpotContext) => FinalHubSpotData;
export declare const handleJsonResponse: (response: any) => Promise<FormSubmitResponse>;
export declare const getOptions: (data: string) => {
    method: string;
    headers: {
        'Content-Type': string;
    };
    body: string;
};
