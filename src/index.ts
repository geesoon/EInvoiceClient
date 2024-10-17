import AxiosHttpClient from "./axiosHttpClient";
import EInvoiceClient from "./eInvoiceClient";
import LoginRequest from "./models/loginRequest";
import LoginResponse from "./models/loginResponse";

let baseUrl = new URL("https://preprod-api.myinvois.hasil.gov.my/");
let httpClient = new AxiosHttpClient();
let eInvoiceClient = new EInvoiceClient(baseUrl, httpClient);

let clientId = "";
let clientSecret = "";
let loginRequest = new LoginRequest(clientId, clientSecret, null);
let session: LoginResponse;
eInvoiceClient.authenticateAsync(loginRequest).then((result) => {
    session = result;
});

