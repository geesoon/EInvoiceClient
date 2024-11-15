import LoginResponse from "./loginResponse";

class Session {
    public accessToken: string;
    public tokenType: string;
    public expiresIn: number;
    public scope: string;
    public createdDateTime: Date;

    constructor(response: LoginResponse) {
        this.accessToken = response.accessToken;
        this.tokenType = response.tokenType;
        this.expiresIn = response.expiresIn;
        this.scope = response.scope;
        this.createdDateTime = new Date();
    }
}

export default Session;