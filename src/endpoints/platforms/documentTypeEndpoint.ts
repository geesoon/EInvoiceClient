import IHttpClient from "../../IHttpClient";
import Endpoint from "../endpoint";

class DocumentTypeEndpoint extends Endpoint {
    private static readonly relativePath: string = "api/v1.0/documenttypes"

    constructor(baseURL: URL, httpClient: IHttpClient) {
        super(baseURL, DocumentTypeEndpoint.relativePath, httpClient);
    }

    public async getAsync() {
        return await this.httpClient.get(this.fullUrl);
    }

    public async getByIdAsync(id: number) {
        return await this.httpClient.get(`${this.fullUrl}${id}`);
    }

    public async getDocumentTypeVersion(id: number, versionId: number) {
        return await this.httpClient.get(`${this.fullUrl}/${id}/versions/${versionId}`);
    }
}

export default DocumentTypeEndpoint;