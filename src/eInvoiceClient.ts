import LoginEndpoint from "./endpoints/platforms/loginEndpoint";
import LoginRequest from "./models/loginRequest";

class EInvoiceClient {
    private readonly loginEndpoint: LoginEndpoint;

    constructor(loginEndpoint: LoginEndpoint) {
        this.loginEndpoint = loginEndpoint;
    }

    async loginAsTaxPayer(request: LoginRequest): Promise<any> {
        const response = await this.loginEndpoint.postAsync(request);
        return response;
    }
}

export default EInvoiceClient;