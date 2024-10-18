import DocumentTypeResponse from "@/models/documentTypeResponse";
import IHttpClient from "../../IHttpClient";
import Endpoint from "../endpoint";
import { AxiosResponse } from "axios";

class DocumentTypeEndpoint extends Endpoint {
    private static readonly relativePath: string = "api/v1.0/documenttypes"

    constructor(baseURL: URL, httpClient: IHttpClient) {
        super(baseURL, DocumentTypeEndpoint.relativePath, httpClient);
    }

    public async getAsync(accessToken: string): Promise<DocumentTypeResponse> {
        const config = this.getBaseRequestConfig(accessToken);
        console.log(config);
        const response = await this.httpClient.get(this.fullUrl, undefined, config);
        return this.getDocumentTypeResponse(response);
    }

    public async getByIdAsync(id: number, accessToken: string): Promise<DocumentTypeResponse> {
        const config = this.getBaseRequestConfig(accessToken);
        const url = `${this.fullUrl}${id}`;
        const result = await this.httpClient.get(url, undefined, config);
        return this.getDocumentTypeResponse(result);
    }

    public async getDocumentTypeVersion(id: number, versionId: number, accessToken: string): Promise<DocumentTypeResponse> {
        const config = this.getBaseRequestConfig(accessToken);
        const url = `${this.fullUrl}/${id}/versions/${versionId}`;
        const result = await this.httpClient.get(url, undefined, config);
        return this.getDocumentTypeResponse(result);
    }

    private getDocumentTypeResponse(response: AxiosResponse): DocumentTypeResponse {
        return this.handleResponse<DocumentTypeResponse>(response, DocumentTypeResponse);
    }
}

export default DocumentTypeEndpoint;