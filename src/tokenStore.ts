import LoginEndpoint from "./endpoints/platform/loginEndpoint";
import ITokenStore from "./ITokenStore";
import LoginRequest from "./models/loginRequest";
import Session from "./models/session";

class TokenStore implements ITokenStore {
    session: Session;
    request: LoginRequest;
    endpoint: LoginEndpoint;

    constructor(session: Session, request: LoginRequest, endpoint: LoginEndpoint) {
        this.session = session;
        this.request = request;
        this.endpoint = endpoint;
    }

    public getAccessToken(): string {
        let tokenExpireDateTime = this.getTokenExpiredDateTime();
        let expiredThresholdDateTime = this.getExpiredThresholdDateTime();
        console.log(tokenExpireDateTime);
        console.log(expiredThresholdDateTime);

        if (tokenExpireDateTime < expiredThresholdDateTime) {
            this.endpoint.loginAsync(this.request).then((result) => {
                let newSession = new Session(result);
                this.session = newSession;
            });
        }
        return this.session.accessToken;
    }

    private getTokenExpiredDateTime(): Date {
        return new Date(this.session.createdDateTime.getTime() + this.session.expiresIn);
    }

    private getExpiredThresholdDateTime(): Date {
        let offsetInSeconds = 300;
        let now = new Date();
        return new Date(now.getTime() - offsetInSeconds);
    }
}

export default TokenStore;