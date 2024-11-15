import { Expose } from "class-transformer";

class LoginResponse {
    @Expose({ name: 'access_token' })
    public accessToken: string;

    @Expose({ name: 'token_type' })
    public tokenType: string;

    @Expose({ name: 'expires_in' })
    public expiresIn: number;

    @Expose({ name: 'scope' })
    public scope: string;

    constructor(accessToken: string, tokenType: string, expiresIn: number, scope: string) {
        this.accessToken = accessToken;
        this.tokenType = tokenType;
        this.expiresIn = expiresIn;
        this.scope = scope;
    }
}

export default LoginResponse;