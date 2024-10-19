import GetNotificationRequest from "@/models/getNotificationRequest";
import IHttpClient from "../../IHttpClient";
import Endpoint from "../endpoint";
import GetNotificationResponse from "@/models/getNotificationResponse";

class NotificationEndpoint extends Endpoint {
    private static readonly relativePath: string = "/api/v1.0/notifications/taxpayer";

    constructor(baseUrl: URL, httpClient: IHttpClient) {
        super(baseUrl, NotificationEndpoint.relativePath, httpClient);
    }

    public async getAsync(request: GetNotificationRequest, accessToken: string): Promise<GetNotificationResponse> {
        const config = this.getBaseRequestConfig(accessToken);
        const response = await this.httpClient.get(this.fullUrl, request, config);
        return this.handleResponse<GetNotificationResponse>(response, GetNotificationResponse);
    }
}

export default NotificationEndpoint;