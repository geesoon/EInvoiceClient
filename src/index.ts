import AxiosHttpClient from "./axiosHttpClient";
import EInvoiceClient from "./eInvoiceClient";
import LoginEndpoint from "./endpoints/platform/loginEndpoint";
import LoginRequest from "./models/loginRequest";
import Session from "./models/session";
import TokenStore from "./tokenStore";

let baseUrl = new URL("https://preprod-api.myinvois.hasil.gov.my/");
let httpClient = new AxiosHttpClient();
let eInvoiceClient = new EInvoiceClient(baseUrl, httpClient);

let clientId = "";
let clientSecret = "";
let loginRequest = new LoginRequest(clientId, clientSecret, null);
let session: Session;
eInvoiceClient.authenticateAsync(loginRequest).then((result) => {
    session = new Session(result);
    let loginEndpoint = new LoginEndpoint(baseUrl, httpClient);
    let tokenStore = new TokenStore(session, loginRequest, loginEndpoint);
    console.log(tokenStore.getAccessToken());
});