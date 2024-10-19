import EInvoiceClientFactory from "./eInvoiceClientFactory";
import LoginRequest from "./models/loginRequest";
import * as dotenv from 'dotenv';
import ValidateTinRequest from "./models/validateTinRequest";

dotenv.config();

async function main() {
    let baseUrl = new URL(getConfig(process.env.SANDBOX_URL));
    let eInvoiceClient = EInvoiceClientFactory.createClient(baseUrl);

    let clientId = getConfig(process.env.ID);
    let clientSecret = getConfig(process.env.SECRET);
    let loginRequest = new LoginRequest(clientId, clientSecret, null);

    await eInvoiceClient.loginAsync(loginRequest);
    // const documents = await eInvoiceClient.getDocumentTypeAsync();
    // console.log(documents);
    // const specificDocumentType = await eInvoiceClient.getDocumentTypeById(1);
    // console.log(specificDocumentType);
    // const specificDocumentTypeVersion = await eInvoiceClient.getDocumentTypeByVersion(1, 1);
    // console.log(specificDocumentTypeVersion);

    const testTIN = getConfig(process.env.TEST_TIN);
    const testBRN = getConfig(process.env.TEST_BRN);
    let validateTINRequest = new ValidateTinRequest(testTIN, "BRN", testBRN);
    const isValidTIN = await eInvoiceClient.validateTinAsync(validateTINRequest);
    console.log(validateTINRequest);
    console.log(`is valid tin? : ${isValidTIN}`);
}

function getConfig(value: string | undefined): string {
    return value || "";
}

main();