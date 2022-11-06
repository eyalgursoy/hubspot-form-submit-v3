<div>
  <h2>hubspot-form-submit-v3</h2>
  <blockquote>A promise-based function for submitting data to Hubspot using latest Hubspot API version.</blockquote>
</div>
## ⭐️ Features

- Webpack 5
- Babel 7
- Hot reloading (`yarn start`)
- Automatic Types file generation (index.d.ts)
- UMD exports, so your library works everywhere.
- Jest unit testing
- Customizable file headers for your build 
- Daily [dependabot](https://dependabot.com) dependency updates

## 📦 Getting Started

### self-host/cdn

```
<script src="https://static.cdn.mayple.com/website/js/hubspot-form-submit-v3/hubspot-form-submit-v3.js"></script>

...
```

### as npm package

```
import { hubspotFormSubmit } from '@mayple/hubspot-form-submit-v3';
...
```

## Methods
`calcSalesQualificationLeadScore = (lead: Lead): number;`


`hubspotFormSubmit = (portalId: string, formGuid: string, fields: HubSpotField[], context?: HubSpotContext): Promise<FormSubmitResponse>`
Accepts portalId, formGuid, fields array, and context object. 
Submits the fields data to hubspot.
The optional parameter context allows to override the default context being sent to Hubspot form.
