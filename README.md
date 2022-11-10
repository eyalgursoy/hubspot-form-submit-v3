<div>
  <h2>hubspot-form-submit-v3</h2>
  <blockquote>A promise-based function for submitting data to Hubspot using latest Hubspot API version.</blockquote>
</div>

## ⭐️ Who needs it?
If you are using Hubspot forms in your app or page, but don't want to use Hubspot's form component or design.
If you are using plain HTML and JS, and not some fancy React app (that's a a pretty good hook for submitting forms data to Hubspot).
If you want to use an unauthenticated form submission to Hubspot directly from your browser.

## 📦 Getting Started
### Installing
Use your preferred package manager to install  
```
npm install @mayple/hubspot-form-submit-v3
```
or
```
yarn install @mayple/hubspot-form-submit-v3
```

Then import the module into your project 
```
import hubspotFormSubmit from '@mayple/hubspot-form-submit-v3';
```

## Prerequisites
This function is based on the following documentation from Hubspot API:
Have a look at the docs - it will help you understand better.

https://legacydocs.hubspot.com/docs/methods/forms/submit_form

2 steps needed for those calls to actually work: 
1. Include Hubspot tracking code on your page, you can read all about it here:    
   https://knowledge.hubspot.com/reports/install-the-hubspot-tracking-code
2. You will need to create a Form in Hubspot, and add all the fields that you want to submit to the form. Trying to submit data on a field that was not added to the Hubspot form - will fail with an error.

## Methods
```hubspotFormSubmit = (portalId: string, formGuid: string, fields: HubSpotField[], context?: HubSpotContext): Promise<FormSubmitResponse>```

Accepts portalId, formGuid, fields array, and context object. 
Submits the fields data to hubspot.
The optional parameter context allows to override the default context being sent to Hubspot form.


#### Wait, What is PortalId?
PortalId is the number of your Hubspot account.
Read more about it here: [Where can I find my Hubspot PortalId?](https://knowledge.hubspot.com/account/manage-multiple-hubspot-accounts#:~:text=To%20check%20which%20HubSpot%20account%20you're%20currently%20in%3A,name%20and%20unique%20Hub%20ID.)

#### formGuid you said?
A unique identifier representing the form in Hubspot (You will see it when you'll create the form on Hubspot) 

## Usage
```
const HUBSPOT_PORTAL_ID = 'your_hubspot_portal_id';
const FORM_ID = 'xxxxxxxx-xxxx-xxxx-xxxx-3fff98103f72';

function handleFormSubmit(hubspotFields: HubspotField[]) {
  hubspotFormSubmit(HUBSPOT_PORTAL_ID, FORM_ID, hubspotFields)
    .then((result: FormSubmitResponse) => {
      if (result.status === 'error') {
        console.log(result);
      }
      return result;
    })
    .catch((error: any) => {
      console.log(error);
    });
}
```

or you can use the async await syntax instead
```
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
```
### HubspotField
The fields data submitted to Hubspot should be in the following structure:
```
const fieldsData: HubspotField[] = [{
   name: 'email',
   value: 'my_email@domain.name'
}, {
   name: 'field_1',
   value: 'some value'
}];
```

BTW, the provided examples are in TypeScript - if you are using plain JS, just remove the types definitions  
