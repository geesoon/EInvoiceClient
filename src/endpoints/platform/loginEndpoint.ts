import { AxiosRequestConfig } from 'axios';
import LoginRequest from '../../models/loginRequest';
import IHttpClient from '../../IHttpClient';
import Endpoint from '../endpoint';
import LoginResponse from '@/models/loginResponse';
import JsonSerializer from '@/jsonSerializer';

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
            return await this.loginAsIntermediary(request);
        }
        return await this.loginAsTaxPayer(request);
    }

    private async loginAsIntermediary(request: LoginRequest) {
        const body = JsonSerializer.serialize<LoginRequest>(request);
        const config: AxiosRequestConfig = {
            headers: {
                'onbehalfof': request.onBehalfOf,
            }
        }
        const result = await this.httpClient.post(this.fullUrl, body, config);
        return JsonSerializer.deserialize<LoginResponse>(result, LoginResponse);
    }

    private async loginAsTaxPayer(request: LoginRequest): Promise<LoginResponse> {
        const body = JsonSerializer.serialize<LoginRequest>(request);
        const result = await this.httpClient.post(this.fullUrl, body);
        return JsonSerializer.deserialize<LoginResponse>(result, LoginResponse);
    }
}

export default LoginEndpoint;