import ValidateTinRequest from "core/models/validateTinRequest";
import IHttpClient from "../../IHttpClient";
import Endpoint from "../endpoint";
import { HttpStatusCode } from "axios";

class ValidateTinEndpoint extends Endpoint {
    private static readonly relativePath: string = "api/v1.0/taxpayer/validate"

    constructor(baseURL: URL, httpClient: IHttpClient) {
        super(baseURL, ValidateTinEndpoint.relativePath, httpClient);
    }

    public async validateTinAsync(request: ValidateTinRequest, accessToken: string): Promise<boolean> {
        const config = this.getBaseRequestConfig(accessToken);
        const url = `${this.fullUrl}/${request.tin}`;
        const query = {
            "idType": request.idType,
            "idValue": request.idValue,
        };
        const response = await this.httpClient.get(url, query, config);
        if (response.status == HttpStatusCode.Ok) {
            return true;
        }
        return false;
    }
}

export default ValidateTinEndpoint;