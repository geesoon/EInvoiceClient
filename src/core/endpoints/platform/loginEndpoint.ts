import IHttpClient from "@/core/IHttpClient";
import JsonSerializer from "@/core/jsonSerializer";
import LoginRequest from "@/core/models/loginRequest";
import LoginResponse from "@/core/models/loginResponse";
import Endpoint from "../endpoint";

/**
 * Represent the endpoint to authenticate user
 * @class 
 */
class LoginEndpoint extends Endpoint {
    private static readonly relativePath: string = "connect/token";

    /**
     * Create a new loginEndpoint.
     * @param {URL} baseURL
     * @param {IHttpClient} httpClient
     */
    constructor(baseURL: URL, httpClient: IHttpClient) {
        super(baseURL, LoginEndpoint.relativePath, httpClient);
    }

    /**
     * authenticate user
     * @param {LoginRequest} request - The request body
     * @returns {LoginResponse} The login response from lhdn.
     */
    public async loginAsync(request: LoginRequest): Promise<LoginResponse> {
        if (request.onBehalfOf) {
            return await this.loginAsIntermediaryAsync(request);
        }
        return await this.loginAsTaxPayerAsync(request);
    }

    private async loginAsIntermediaryAsync(request: LoginRequest) {
        const body = JsonSerializer.serializeIntoQueryString<LoginRequest>(request);
        const config = {
            headers: {
                "onbehalfof": request.onBehalfOf,
            }
        }
        const response = await this.httpClient.post(this.fullUrl, body, config);
        return this.handleResponse<LoginResponse>(response, LoginResponse);
    }

    private async loginAsTaxPayerAsync(request: LoginRequest): Promise<LoginResponse> {
        const body = JsonSerializer.serializeIntoQueryString<LoginRequest>(request);
        const response = await this.httpClient.post(this.fullUrl, body);
        return this.handleResponse<LoginResponse>(response, LoginResponse);
    }
}

export default LoginEndpoint;