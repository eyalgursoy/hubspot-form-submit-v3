import cookies from 'js-cookie';

import { HUBSPOT_UTK_COOKIE } from './consts';
import { FinalHubspotData, FormSubmitResponse, HubspotContext, HubspotField } from './types';

export const validateRequiredParameter = (parameterName: string, parameterValue: any): void => {
  if (!parameterValue) {
    throw new Error(`Missing required parameter ${parameterName}`);
  }
};

const validateHubspotCookie = (): string => {
  // Get hubspot cookie. Without it, form submission fails
  const hutk = cookies.get(HUBSPOT_UTK_COOKIE);
  if (!hutk) {
    console.warn(
      'hubspotutk cookie not found, though form can be submitted - you might not be able to associate analytics data'
    );
  }
  return hutk;
};

export const collectFormData = (
  portalId: string,
  formGuid: string,
  fields: HubspotField[],
  context?: HubspotContext
): FinalHubspotData => {
  const hutk = validateHubspotCookie();

  const submittedAt = new Date().getTime();

  const finalContext: HubspotContext = {
    // Add default data to context
    hutk,
    pageUri: window?.location?.href,
    pageName: window?.document?.title,
    // if values were passed through context - override the defaults
    ...context,
  };

  const finalData: FinalHubspotData = {
    fields,
    context: finalContext,
    submittedAt,
    formGuid,
    portalId,
  };

  return finalData;
};

export const handleJsonResponse = async (response: any): Promise<FormSubmitResponse> => {
  const jsonResponse = await response.json();
  // console.log('response', response);
  // console.log('jsonResponse', jsonResponse);

  if (response.status === 200) {
    return {
      status: 'success',
      message: jsonResponse?.inlineMessage,
    } as FormSubmitResponse;
  } else if (response.status >= 400) {
    return {
      status: 'error',
      message: jsonResponse?.message,
      errors: jsonResponse?.errors,
    };
  }
};

export const getOptions = (data: string) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  };
};
