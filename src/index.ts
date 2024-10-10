import EInvoiceClient from "./eInvoiceClient";
import LoginEndpoint from "./endpoints/loginEndpoint";
import LoginRequest from "./models/loginRequest";

const baseUrl = new URL("https://preprod-api.myinvois.hasil.gov.my/");
const loginEndpoint = new LoginEndpoint(baseUrl, "connect/token")
const eInvoiceClient = new EInvoiceClient(loginEndpoint);

export async function loginAsync(request: LoginRequest): Promise<any> {
    return eInvoiceClient.loginAsTaxPayer(request);
}