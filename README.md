# EInvoiceClient Node Package
This package is meant to be a typescript sdk for developer to easily integrate the api from e-hasil providing all endpoints and models needed.

# How to use?
A factory class is provided to create client for both pre-prod and prod environment, insert the baseUrl accordingly. [Refer to the base urls from the official website](https://sdk.myinvois.hasil.gov.my/faq/#what-are-the-environment-urls).

```
const baseUrl = new URL("<base url here>");
const eInvoiceClient = EInvoiceClientFactory.createClient(baseUrl);
```

# Supported Endpoints
`IEInvoiceClient` is the facade to all the endpoints, both [platform](https://sdk.myinvois.hasil.gov.my/api/) and [e-invoice](https://sdk.myinvois.hasil.gov.my/einvoicingapi/), from LHDN website.

For example:

Login endpoint
```
const clientId = "<your client id>"
const clientSecret = "<your client secret>"
const loginRequest = new LoginRequest(clientId, clientSecret, null);
await eInvoiceClient.loginAsync(loginRequest);
```

Get document type
```
const documents = await eInvoiceClient.getDocumentTypeAsync();
```

# Available Models

# Error Handling
Api call error from LHDN is wrapped within [ApiError](https://github.com/geesoon/EInvoiceClient/blob/main/src/core/models/apiError.ts) class and bubble up to the sdk caller.

# Todo 
Create integration tests to ensure all endpoints are functioning as expected.

# Roadmap
The ultimate goal is to create an easy to use mobile app, free for all malaysian lowest bracket small businesses to use. The plan is not to create a full fledge accounting or ERP system.
