import LoginAsTaxPayerEndpoint from "./endpoints/loginAsTaxPayerEndpoint";
import LoginAsTaxPayerRequest from "./models/loginAsTaxPayerRequest";

class EInvoiceClient {
    private readonly loginAsTaxPayerEndpoint: LoginAsTaxPayerEndpoint;

    constructor(loginAsTaxPayerEndpoint: LoginAsTaxPayerEndpoint) {
        this.loginAsTaxPayerEndpoint = loginAsTaxPayerEndpoint;
    }

    async loginAsTaxPayer(request: LoginAsTaxPayerRequest): Promise<any> {
        const response = await this.loginAsTaxPayerEndpoint.postAsync(request);
        return response;
    }
}

export default EInvoiceClient;