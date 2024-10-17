import DocumentTypeResponse from "@/models/documentTypeResponse";
import IHttpClient from "../../IHttpClient";
import Endpoint from "../endpoint";
import JsonSerializer from "@/jsonSerializer";

class DocumentTypeEndpoint extends Endpoint {
    private static readonly relativePath: string = "api/v1.0/documenttypes"

    constructor(baseURL: URL, httpClient: IHttpClient) {
        super(baseURL, DocumentTypeEndpoint.relativePath, httpClient);
    }

    public async getAsync(): Promise<DocumentTypeResponse> {
        const result = await this.httpClient.get(this.fullUrl);
        return this.getDocumentTypeResponse(result);
    }

    public async getByIdAsync(id: number): Promise<DocumentTypeResponse> {
        const url = `${this.fullUrl}${id}`;
        const result = await this.httpClient.get(url);
        return this.getDocumentTypeResponse(result);
    }

    public async getDocumentTypeVersion(id: number, versionId: number): Promise<DocumentTypeResponse> {
        const url = `${this.fullUrl}/${id}/versions/${versionId}`;
        const result = await this.httpClient.get(url);
        return this.getDocumentTypeResponse(result);
    }

    private getDocumentTypeResponse(result: any): DocumentTypeResponse {
        return JsonSerializer.deserialize<DocumentTypeResponse>(result, DocumentTypeResponse);
    }
}

export default DocumentTypeEndpoint;