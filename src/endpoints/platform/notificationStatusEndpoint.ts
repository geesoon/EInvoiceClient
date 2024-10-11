import IHttpClient from "../../IHttpClient";
import NotificationStatusRequest from "../../models/notificationStatusRequest";
import Endpoint from "../endpoint";

class NotificationStatusEndpoint extends Endpoint {
    private static readonly relativePath: string = "/api/v1.0/notifications/taxpayer";

    constructor(baseUrl: URL, httpClient: IHttpClient) {
        super(baseUrl, NotificationStatusEndpoint.relativePath, httpClient);
    }

    public async getNotificationAsync(request: NotificationStatusRequest) {
        this.httpClient.get(`${this.fullUrl}?dateFrom=${request.dateFrom}&dateTo=${request.dateTo}&type=${request.type}&language=${request.language}&status=${request.status}&pageNo=${request.pageNo}&pageSize=${request.pageSize}`);
    }
}

export default NotificationStatusEndpoint;