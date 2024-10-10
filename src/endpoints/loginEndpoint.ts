import axios, { AxiosRequestConfig } from 'axios';
import * as qs from 'qs';
import LoginRequest from '../models/loginRequest';

class LoginEndpoint {
    private readonly baseURL: URL;
    private readonly relativePath: string;

    constructor(baseURL: URL, relativePath: string) {
        this.baseURL = baseURL;
        this.relativePath = relativePath;
    }

    public async postAsync(request: LoginRequest): Promise<any> {
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
        const response = await axios.post(this.getFullUrl(), qs.stringify(request), config);
        return response;
    }

    private async loginAsTaxPayer(request: LoginRequest) {
        const response = await axios.post(this.getFullUrl(), qs.stringify(request));
        return response;
    }

    private getFullUrl(): string {
        return this.baseURL.toString() + this.relativePath;
    }
}

export default LoginEndpoint;