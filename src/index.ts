import EInvoiceClientFactory from "./EInvoiceClientFactory";
import LoginRequest from "./models/loginRequest";
import Session from "./models/session";

let baseUrl = new URL("https://preprod-api.myinvois.hasil.gov.my/");
let eInvoiceClient = EInvoiceClientFactory.createClient(baseUrl);

let clientId = "";
let clientSecret = "";
let loginRequest = new LoginRequest(clientId, clientSecret, null);
let session: Session;
eInvoiceClient.authenticateAsync(loginRequest).then((result) => {
    session = new Session(result);
});