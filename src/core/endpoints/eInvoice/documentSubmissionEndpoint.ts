import IHttpClient from "core/IHttpClient";
import Endpoint from "../endpoint";
import SubmitDocumentResponse from "core/models/submitDocumentResponse";
import { HttpStatusCode } from "axios";
import ApiError from "core/models/apiError";
import SubmitDocumentRequest from "core/models/submitDocumentRequest";
import StandardErrorResponse from "core/models/standardErrorResponse";
import GetSubmissionRequest from "core/models/getSubmissionRequest";
import GetSubmissionResponse from "core/models/getSubmissionResponse";

class DocumentSubmissionEndpoint extends Endpoint {
    private static readonly relativePath: string = "api/v1.0/documentsubmissions";

    constructor(baseUrl: URL, httpClient: IHttpClient) {
        super(baseUrl, DocumentSubmissionEndpoint.relativePath, httpClient)
    }

    public async submitDocumentsAsync(request: SubmitDocumentRequest, accessToken: string): Promise<SubmitDocumentResponse> {
        let config = this.getBaseRequestConfig(accessToken);
        if (config && config.headers) {
            config.headers["Content-Type"] = "application/json";
        }

        const response = await this.httpClient.post(this.fullUrl, request, config);

        if (response.status == HttpStatusCode.Accepted) {
            return this.handleResponse<SubmitDocumentResponse>(response, SubmitDocumentResponse);
        }

        const standardErrorResponse = this.handleResponse<StandardErrorResponse>(response, StandardErrorResponse);
        throw new ApiError(`Submit documents not successful: ${standardErrorResponse.errorCode}`, response.status, standardErrorResponse);
    }

    public async getSubmissionAsync(request: GetSubmissionRequest, accessToken: string): Promise<GetSubmissionResponse> {
        const url = `${this.fullUrl}/${request.submissionUid}`;
        const query = {
            "pageNo": request.pageNo,
            "pageSize": request.pageSize,
        }
        const config = this.getBaseRequestConfig(accessToken);
        const response = await this.httpClient.get(url, query, config);
        return this.handleResponse<GetSubmissionResponse>(response, GetSubmissionResponse);
    }
}

export default DocumentSubmissionEndpoint;