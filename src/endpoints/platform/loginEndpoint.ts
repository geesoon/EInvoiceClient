import { AxiosRequestConfig } from 'axios';
import * as qs from 'qs';
import LoginRequest from '../../models/loginRequest';
import IHttpClient from '../../IHttpClient';
import Endpoint from '../endpoint';

class LoginEndpoint extends Endpoint {
    private static readonly relativePath: string = "connect/token";

    constructor(baseURL: URL, httpClient: IHttpClient) {
        super(baseURL, LoginEndpoint.relativePath, httpClient);
    }

    public async loginAsync(request: LoginRequest): Promise<any> {
        if (request.onBehalfOf) {
            return await this.loginAsIntermediary(request);
        }
        return await this.loginAsTaxPayer(request);
    }

    private async loginAsIntermediary(request: LoginRequest) {
        const data = qs.stringify(request);
        const config: AxiosRequestConfig = {
            headers: {
                'onbehalfof': request.onBehalfOf,
            }
        }
        return await this.httpClient.post(this.fullUrl, data, config);
    }

    private async loginAsTaxPayer(request: LoginRequest) {
        const data = qs.stringify(request);
        return await this.httpClient.post(this.fullUrl, data);
    }
}

export default LoginEndpoint;