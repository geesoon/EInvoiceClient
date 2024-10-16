import DocumentTypeResponse from "@/models/documentTypeResponse";
import IHttpClient from "../../IHttpClient";
import Endpoint from "../endpoint";

class DocumentTypeEndpoint extends Endpoint {
    private static readonly relativePath: string = "api/v1.0/documenttypes"

    constructor(baseURL: URL, httpClient: IHttpClient) {
        super(baseURL, DocumentTypeEndpoint.relativePath, httpClient);
    }

    public async getAsync() {
        return await this.httpClient.get<DocumentTypeResponse>(this.fullUrl, DocumentTypeResponse);
    }

    public async getByIdAsync(id: number) {
        const url = `${this.fullUrl}${id}`;
        return await this.httpClient.get<DocumentTypeResponse>(url, DocumentTypeResponse);
    }

    public async getDocumentTypeVersion(id: number, versionId: number) {
        const url = `${this.fullUrl}/${id}/versions/${versionId}`;
        return await this.httpClient.get<DocumentTypeResponse>(url, DocumentTypeResponse);
    }
}

export default DocumentTypeEndpoint;