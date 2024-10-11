import NotificationStatus from "./notificationStatus";
import NotificationType from "./notificationTypes";

class NotificationStatusRequest {
    dateFrom: Date;
    dateTo: Date;
    type: NotificationType;
    language: Language;
    status: NotificationStatus;
    pageNo: number;
    pageSize: number;

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

export default NotificationStatusRequest;