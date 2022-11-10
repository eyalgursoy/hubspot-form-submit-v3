import { validateRequiredParameter } from '../logic';
import hubspotFormSubmit, { HubspotField } from '../index';

describe('test validateRequiredParameter', () => {
  it('should throw an error if the parameter value is null', () => {
    expect(() => validateRequiredParameter('param1', null)).toThrow();
  });
});

const HUBSPOT_PORTAL_ID = 'your_hubspot_portal_id';
const FORM_ID = 'xxxxxxxx-xxxx-xxxx-xxxx-3fff98103f72';

async function handleFormSubmit(hubspotFields: HubspotField[]) {
  try {
    const result = await hubspotFormSubmit(HUBSPOT_PORTAL_ID, FORM_ID, hubspotFields);
    if (result.status === 'error') {
      console.log(result);
    }
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}
