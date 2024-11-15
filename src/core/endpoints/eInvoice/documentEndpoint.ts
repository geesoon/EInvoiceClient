import IHttpClient from "core/IHttpClient";
import Endpoint from "../endpoint";
import CancelDocumentResponse from "core/models/cancelDocumentResponse";
import CancelDocumentRequest from "core/models/cancelDocumentRequest";
import { HttpStatusCode } from "axios";
import ApiError from "core/models/apiError";
import StandardErrorResponse from "core/models/standardErrorResponse";
import GetRecentDocumentRequest from "core/models/getRecentDocumentRequest";
import GetRecentDocumentResponse from "core/models/getRecentDocumentResponse";
import SearchDocumentRequest from "core/models/searchDocumentRequest";
import SearchDocumentResponse from "core/models/searchDocumentResponse";
import GetDocumentRequest from "core/models/getDocumentRequest";
import DocumentExtended from "core/models/documentExtended";
import GetDocumentDetailRequest from "core/models/getDocumentDetailRequest";
import DocumentDetails from "core/models/documentDetail";

class DocumentEndpoint extends Endpoint {
    private static readonly relativePath: string = "api/v1.0/documents/state";

    constructor(baseUrl: URL, httpClient: IHttpClient) {
        super(baseUrl, DocumentEndpoint.relativePath, httpClient);
    }

    public async cancelDocumentAsync(request: CancelDocumentRequest, accessToken: string): Promise<CancelDocumentResponse> {
        const url = `${this.fullUrl}/${request.uuid}/state`;
        const body = {
            "status": request.status,
            "reason": request.reason,
        }
        const config = this.getBaseRequestConfig(accessToken);
        const response = await this.httpClient.put(url, body, config);

        if (response.status == HttpStatusCode.Ok) {
            return this.handleResponse<CancelDocumentResponse>(response, CancelDocumentResponse);
        }

        const standardErrorResponse = this.handleResponse<StandardErrorResponse>(response, StandardErrorResponse);
        throw new ApiError(`Cancel document not successful: ${standardErrorResponse.errorCode}`, response.status, standardErrorResponse);
    }

    public async rejectDocumentAsync(request: CancelDocumentRequest, accessToken: string): Promise<CancelDocumentResponse> {
        const url = `${this.fullUrl}/${request.uuid}/state`;
        const body = {
            "status": request.status,
            "reason": request.reason,
        }
        const config = this.getBaseRequestConfig(accessToken);
        const response = await this.httpClient.put(url, body, config);

        if (response.status == HttpStatusCode.Ok) {
            return this.handleResponse<CancelDocumentResponse>(response, CancelDocumentResponse);
        }

        const standardErrorResponse = this.handleResponse<StandardErrorResponse>(response, StandardErrorResponse);
        throw new ApiError(`Reject document not successful: ${standardErrorResponse.errorCode}`, response.status, standardErrorResponse);
    }

    public async getRecentDocumentAsync(request: GetRecentDocumentRequest, accessToken: string): Promise<GetRecentDocumentResponse> {
        const config = this.getBaseRequestConfig(accessToken);
        const response = await this.httpClient.get(this.fullUrl, request, config);
        return this.handleResponse<GetRecentDocumentResponse>(response, GetRecentDocumentResponse);
    }

    public async searchDocumentAsync(request: SearchDocumentRequest, accessToken: string): Promise<SearchDocumentResponse> {
        const config = this.getBaseRequestConfig(accessToken);
        const response = await this.httpClient.get(this.fullUrl, request, config);
        return this.handleResponse<SearchDocumentResponse>(response, SearchDocumentResponse);
    }

    public async getDocumentAsync(request: GetDocumentRequest, accessToken: string): Promise<DocumentExtended> {
        const url = `${this.fullUrl}/${request.uuid}/raw`;
        const config = this.getBaseRequestConfig(accessToken);
        const response = await this.httpClient.get(url, request, config);
        return this.handleResponse<DocumentExtended>(response, DocumentExtended);
    }

    public async getDocumentDetailAsync(request: GetDocumentDetailRequest, accessToken: string): Promise<DocumentDetails> {
        const url = `${this.fullUrl}/${request.uuid}/details`;
        const config = this.getBaseRequestConfig(accessToken);
        const response = await this.httpClient.get(url, request, config);
        return this.handleResponse<DocumentDetails>(response, DocumentDetails);
    }
}

export default DocumentEndpoint;