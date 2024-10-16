import AxiosHttpClient from "./axiosHttpClient";
import EInvoiceClient from "./eInvoiceClient";
import LoginRequest from "./models/loginRequest";

let baseUrl = new URL("https://preprod-api.myinvois.hasil.gov.my/");
let httpClient = new AxiosHttpClient();
let eInvoiceClient = new EInvoiceClient(baseUrl, httpClient);

let clientId = "";
let clientSecret = "";
let request = new LoginRequest(clientId, clientSecret, null);

eInvoiceClient.authenticateAsync(request).then((result) => {
    console.log(result);
});