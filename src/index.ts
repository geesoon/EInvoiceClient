import EInvoiceClient from "./eInvoiceClient";
import LoginAsTaxPayerEndpoint from "./endpoints/loginAsTaxPayerEndpoint";
import LoginAsTaxPayerRequest from "./models/loginAsTaxPayerRequest";

const baseUrl = new URL("https://preprod-api.myinvois.hasil.gov.my/");
const eInvoiceClient = new EInvoiceClient(new LoginAsTaxPayerEndpoint(baseUrl, "connect/token"));

export function loginAsTaxPayer(request: LoginAsTaxPayerRequest) {
    return eInvoiceClient.loginAsTaxPayer(request);
}