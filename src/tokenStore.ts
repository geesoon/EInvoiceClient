import LoginEndpoint from "./endpoints/platform/loginEndpoint";
import LoginRequest from "./models/loginRequest";
import Session from "./models/session";

class TokenStore {
    session: Session;
    request: LoginRequest;
    endpoint: LoginEndpoint;

    constructor(session: Session, request: LoginRequest, endpoint: LoginEndpoint) {
        this.session = session;
        this.request = request;
        this.endpoint = endpoint;
    }

    getAccessToken() {
        return this.session.accessToken;
    }
}

export default TokenStore;