class LoginResponse {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    scope: string;

    constructor(accessToken: string, tokenType: string, expiresIn: number, scope: string) {
        this.accessToken = accessToken;
        this.tokenType = tokenType;
        this.expiresIn = expiresIn;
        this.scope = scope;
    }
}