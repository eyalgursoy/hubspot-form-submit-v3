import fetch from 'cross-fetch';

import { FinalHubspotData, FormSubmitResponse, HubspotContext, HubspotData, HubspotField } from './types';
import { collectFormData, getOptions, handleJsonResponse, validateRequiredParameter } from './logic';
import { HUBSPOT_FORM_SUBMIT_URL } from './consts';
const hubspotFormSubmit = async (
  portalId: string,
  formGuid: string,
  fields: HubspotField[],
  context?: HubspotContext
): Promise<FormSubmitResponse> => {
  // parameters validation
  validateRequiredParameter('portalId', portalId);
  validateRequiredParameter('formGuid', formGuid);
  validateRequiredParameter('fields', fields);

  // get the data
  const finalData = collectFormData(portalId, formGuid, fields, context);

  // submit the data
  const stringifyData = JSON.stringify(finalData);
  const url = `${HUBSPOT_FORM_SUBMIT_URL}${portalId}/${formGuid}`;

  try {
    const options = getOptions(stringifyData);
    const response = await fetch(url, options);

    return handleJsonResponse(response);
  } catch (err) {
    console.error(err);
    throw new Error('Error while trying to submit form to Hubspot.');
  }
};

export type { HubspotField, HubspotContext, HubspotData, FinalHubspotData };

export default hubspotFormSubmit;
