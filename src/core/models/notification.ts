import DeliveryAttempt from "./deliveryAttempt";
import Language from "./language";
import NotificationStatus from "./notificationStatus";

class Notification {
    public notificationId: string;
    public receiverName: string;
    public notificationDeliveryId: string;
    public creationDateTime: Date;
    public receivedDateTime: Date;
    public notificationSubject: string;
    public deliveredDateTime: Date;
    public typeId: string;
    public typeName: string;
    public finalMessage: string;
    public address: string;
    public language: Language;
    public status: NotificationStatus;
    public deliveryAttempts: DeliveryAttempt[];
}

export default Notification;