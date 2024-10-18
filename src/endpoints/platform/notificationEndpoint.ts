import NotificationRequest from "@/models/notificationRequest";
import IHttpClient from "../../IHttpClient";
import Endpoint from "../endpoint";
import NotificationResponse from "@/models/notificationResponse";

class NotificationEndpoint extends Endpoint {
    private static readonly relativePath: string = "/api/v1.0/notifications/taxpayer";

    constructor(baseUrl: URL, httpClient: IHttpClient) {
        super(baseUrl, NotificationEndpoint.relativePath, httpClient);
    }

    public async getNotificationAsync(request: NotificationRequest, accessToken: string): Promise<NotificationResponse> {
        const config = this.getBaseRequestConfig(accessToken);
        const response = await this.httpClient.get(this.fullUrl, request, config);
        return this.handleResponse<NotificationResponse>(response, NotificationResponse);
    }
}

export default NotificationEndpoint;