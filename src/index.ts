import EInvoiceClientFactory from "./eInvoiceClientFactory";
import LoginRequest from "./models/loginRequest";

let baseUrl = new URL("https://preprod-api.myinvois.hasil.gov.my/");
let eInvoiceClient = EInvoiceClientFactory.createClient(baseUrl);

let clientId = "";
let clientSecret = "";
let loginRequest = new LoginRequest(clientId, clientSecret, null);

eInvoiceClient.authenticateAsync(loginRequest).then((result) => {
    console.log(result);
    eInvoiceClient.getDocumentAsync().then((result) => {
        console.log(result);
    });
});