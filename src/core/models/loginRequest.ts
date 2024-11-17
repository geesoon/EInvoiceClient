import { Expose } from "class-transformer";

class LoginRequest {
    @Expose({ name: 'client_id' })
    public clientId: string | undefined;

    @Expose({ name: 'client_secret' })
    public clientSecret: string;

    @Expose({ name: 'grant_type' })
    public grantType: string = "client_credentials";

    @Expose({ name: 'scope' })
    public scope: string = "InvoicingAPI";

    public onBehalfOf: string | null;
}

export default LoginRequest;