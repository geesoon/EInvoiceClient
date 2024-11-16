import IHttpClient from "@/core/IHttpClient";
import DocumentTypeResponse from "@/core/models/documentTypeResponse";
import DocumentTypeVersion from "@/core/models/documentTypeVersion";
import Endpoint from "../endpoint";
import DocumentType from "@/core/models/documentType";

class DocumentTypeEndpoint extends Endpoint {
    private static readonly relativePath: string = "api/v1.0/documenttypes"

    constructor(baseURL: URL, httpClient: IHttpClient) {
        super(baseURL, DocumentTypeEndpoint.relativePath, httpClient);
    }

    public async getAsync(accessToken: string): Promise<DocumentTypeResponse> {
        const config = this.getBaseRequestConfig(accessToken);
        const response = await this.httpClient.get(this.fullUrl, undefined, config);
        return this.handleResponse<DocumentTypeResponse>(response, DocumentTypeResponse);
    }

    public async getByIdAsync(id: number, accessToken: string): Promise<DocumentType> {
        const config = this.getBaseRequestConfig(accessToken);
        const url = `${this.fullUrl}/${id}`;
        const response = await this.httpClient.get(url, undefined, config);
        return this.handleResponse<DocumentType>(response, DocumentType);
    }

    public async getByVersionAsync(id: number, versionId: number, accessToken: string): Promise<DocumentTypeVersion> {
        const config = this.getBaseRequestConfig(accessToken);
        const url = `${this.fullUrl}/${id}/versions/${versionId}`;
        const response = await this.httpClient.get(url, undefined, config);
        return this.handleResponse<DocumentTypeVersion>(response, DocumentTypeVersion);
    }
}

export default DocumentTypeEndpoint;