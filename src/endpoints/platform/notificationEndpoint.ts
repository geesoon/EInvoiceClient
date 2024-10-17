import NotificationRequest from "@/models/notificationRequest";
import IHttpClient from "../../IHttpClient";
import Endpoint from "../endpoint";
import NotificationResponse from "@/models/notificationResponse";
import JsonSerializer from "@/jsonSerializer";

class NotificationEndpoint extends Endpoint {
    private static readonly relativePath: string = "/api/v1.0/notifications/taxpayer";

    constructor(baseUrl: URL, httpClient: IHttpClient) {
        super(baseUrl, NotificationEndpoint.relativePath, httpClient);
    }

    public async getNotificationAsync(request: NotificationRequest): Promise<NotificationResponse> {
        const result = this.httpClient.get(this.fullUrl, request);
        return JsonSerializer.deserialize<NotificationResponse>(result, NotificationResponse);
    }
}

export default NotificationEndpoint;