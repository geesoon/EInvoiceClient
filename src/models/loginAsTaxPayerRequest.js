"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginAsTaxPayerRequest {
    constructor(clientId, clientSecret, scope) {
        this.grant_type = "client_credentials";
        this.client_id = clientId;
        this.client_secret = clientSecret;
        this.scope = scope;
    }
}
exports.default = LoginAsTaxPayerRequest;
