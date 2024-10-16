import { AxiosRequestConfig } from 'axios';
import LoginRequest from '../../models/loginRequest';
import IHttpClient from '../../IHttpClient';
import Endpoint from '../endpoint';
import LoginResponse from '@/models/loginResponse';

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
        const config: AxiosRequestConfig = {
            headers: {
                'onbehalfof': request.onBehalfOf,
            }
        }
        return await this.httpClient.post<LoginRequest, LoginResponse>(this.fullUrl, request, LoginResponse, config);
    }

    private async loginAsTaxPayer(request: LoginRequest) {
        return await this.httpClient.post<LoginRequest, LoginResponse>(this.fullUrl, request, LoginResponse);
    }
}

export default LoginEndpoint;