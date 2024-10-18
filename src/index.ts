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

    await eInvoiceClient.authenticateAsync(loginRequest);
    const documents = await eInvoiceClient.getDocumentTypeAsync();
    console.log(documents);
    const specificDocumentType = await eInvoiceClient.getDocumentTypeById(1);
    console.log(specificDocumentType);
    const specificDocumentTypeVersion = await eInvoiceClient.getDocumentTypeByVersion(1, 1);
    console.log(specificDocumentTypeVersion);
}

main();