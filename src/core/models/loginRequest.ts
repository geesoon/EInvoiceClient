import { Expose } from "class-transformer";

class LoginRequest {
    @Expose({ name: 'client_id' })
    public clientId: string;

    @Expose({ name: 'client_secret' })
    public clientSecret: string;

    @Expose({ name: 'grant_type' })
    public grantType: string = "client_credentials";

    @Expose({ name: 'scope' })
    public scope: string = "InvoicingAPI";

    public onBehalfOf: string | null;

    constructor(clientId: string, clientSecret: string, onBehalfOf: string | null = null) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.onBehalfOf = onBehalfOf;
    }
}

export default LoginRequest;