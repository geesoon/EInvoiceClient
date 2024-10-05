import axios from 'axios';
import qs from 'qs';
import LoginAsTaxPayerRequest from '../models/loginAsTaxPayerRequest';

class LoginAsTaxPayerEndpoint {
    private readonly baseURL: URL;
    private readonly relativePath: string;

    constructor(baseURL: URL, relativePath: string) {
        this.baseURL = baseURL;
        this.relativePath = relativePath;
    }

    async postAsync(request: LoginAsTaxPayerRequest): Promise<any> {
        const response = await axios.post(this.getFullUrl(), qs.stringify(request));
        return response;
    }

    getFullUrl(): string {
        return this.baseURL.toString() + this.relativePath;
    }
}

export default LoginAsTaxPayerEndpoint;