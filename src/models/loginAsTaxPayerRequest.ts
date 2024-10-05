class LoginAsTaxPayerRequest {
    public client_id: string;
    public client_secret: string;
    public grant_type: string = "client_credentials";
    public scope: string | null;

    constructor(clientId: string, clientSecret: string, scope: string | null) {
        this.client_id = clientId;
        this.client_secret = clientSecret;
        this.scope = scope;
    }
}

export default LoginAsTaxPayerRequest;