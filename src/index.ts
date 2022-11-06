import fetch from 'cross-fetch';

import { FinalHubSpotData, FormSubmitResponse, HubSpotContext, HubSpotData, HubSpotField } from './types';
import { collectFormData, getOptions, handleJsonResponse, validateRequiredParameter } from './logic';
const hubspotFormSubmit = async (
  portalId: string,
  formGuid: string,
  fields: HubSpotField[],
  context?: HubSpotContext
): Promise<FormSubmitResponse> => {
  // parameters validation
  validateRequiredParameter('portalId', portalId);
  validateRequiredParameter('formGuid', formGuid);
  validateRequiredParameter('fields', fields);

  // get the data
  const finalData = collectFormData(portalId, formGuid, fields, context);

  // submit the data
  const stringifyData = JSON.stringify(finalData);
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

  try {
    const options = getOptions(stringifyData);
    const response = await fetch(url, options);

    return handleJsonResponse(response);
  } catch (err) {
    console.error(err);
    throw new Error('Error while trying to submit form to Hubspot.');
  }
};

export type { HubSpotField, HubSpotContext, HubSpotData, FinalHubSpotData };

export default hubspotFormSubmit;
