import NotificationStatus from "./notificationStatus";
import NotificationType from "./notificationTypes";

class NotificationRequest {
    public dateFrom: Date;
    public dateTo: Date;
    public type: NotificationType;
    public language: Language;
    public status: NotificationStatus;
    public pageNo: number;
    public pageSize: number;

    constructor(dateFrom: Date, dateTo: Date, type: NotificationType, language: Language, status: NotificationStatus, pageNo: number, pageSize: number) {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.type = type;
        this.language = language;
        this.status = status;
        this.pageNo = pageNo;
        this.pageSize = pageSize;
    }
}

export default NotificationRequest;