import Language from "./language";
import NotificationStatus from "./notificationStatus";
import NotificationType from "./notificationTypes";

class GetNotificationRequest {
    public dateFrom: Date;
    public dateTo: Date;
    public type: NotificationType;
    public language: Language;
    public status: NotificationStatus;
    public pageNo: number;
    public pageSize: number;
}

export default GetNotificationRequest;