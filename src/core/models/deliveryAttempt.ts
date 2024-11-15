import NotificationDeliveryStatus from "./notificationDeliveryStatus";

class DeliveryAttempt {
    public attemptDateTime: Date;
    public status: NotificationDeliveryStatus;
    public statusDetails: string;

    constructor(attemptDateTime: Date, status: NotificationDeliveryStatus, statusDetails: string) {
        this.attemptDateTime = attemptDateTime;
        this.status = status;
        this.statusDetails = statusDetails;
    }
}

export default DeliveryAttempt;