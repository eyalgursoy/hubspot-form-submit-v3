import { FinalHubspotData, FormSubmitResponse, HubspotContext, HubspotField } from './types';
export declare const validateRequiredParameter: (parameterName: string, parameterValue: any) => void;
export declare const collectFormData: (portalId: string, formGuid: string, fields: HubspotField[], context?: HubspotContext) => FinalHubspotData;
export declare const handleJsonResponse: (response: any) => Promise<FormSubmitResponse>;
export declare const getOptions: (data: string) => {
    method: string;
    headers: {
        'Content-Type': string;
    };
    body: string;
};
