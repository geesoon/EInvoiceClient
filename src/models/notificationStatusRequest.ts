import NotificationStatus from "./notificationStatus";
import NotificationType from "./notificationTypes";

class NotificationStatusRequest {
    public dateFrom: Date;
    public dateTo: Date;
    public type: NotificationType;
    public language: Language;
    public status: NotificationStatus;
    public pageNo: Number;
    public pageSize: Number;
}

export default NotificationStatusRequest;