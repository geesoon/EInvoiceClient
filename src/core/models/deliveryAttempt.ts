import NotificationDeliveryStatus from "./notificationDeliveryStatus";

class DeliveryAttempt {
    public attemptDateTime: Date;
    public status: NotificationDeliveryStatus;
    public statusDetails: string;
}

export default DeliveryAttempt;