import EInvoiceClientFactory from "./eInvoiceClientFactory";
import LoginRequest from "./models/loginRequest";
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
    let baseUrl = new URL(process.env.SANDBOX_URL ?? "");
    let eInvoiceClient = EInvoiceClientFactory.createClient(baseUrl);

    let clientId = process.env.ID ?? "";
    let clientSecret = process.env.SECRET ?? "";
    let loginRequest = new LoginRequest(clientId, clientSecret, null);

    const loginResponse = await eInvoiceClient.authenticateAsync(loginRequest);
    console.log(loginResponse);
    const documents = await eInvoiceClient.getDocumentAsync();
    console.log(documents);
}

main();