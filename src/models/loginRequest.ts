class LoginRequest {
    public clientId: string;
    public clientSecret: string;
    public grantType: string = "client_credentials";
    public scope: string | null;
    public onBehalfOf: string | null;

    constructor(clientId: string, clientSecret: string, scope: string | null = null, onBehalfOf: string | null = null) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.scope = scope;
        this.onBehalfOf = onBehalfOf;
    }
}

export default LoginRequest;