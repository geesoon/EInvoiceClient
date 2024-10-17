import DeliveryAttempt from "./deliveryAttempt";
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

    constructor(
        notificationId: string,
        receiverName: string,
        notificationDeliveryId: string,
        creationDateTime: Date,
        receivedDateTime: Date,
        notificationSubject: string,
        deliveredDateTime: Date,
        typeId: string,
        typeName: string,
        finalMessage: string,
        address: string,
        language: Language,
        status: NotificationStatus,
        deliveryAttempts: DeliveryAttempt[]
    ) {
        this.notificationId = notificationId;
        this.receiverName = receiverName;
        this.notificationDeliveryId = notificationDeliveryId;
        this.creationDateTime = creationDateTime;
        this.receivedDateTime = receivedDateTime;
        this.notificationSubject = notificationSubject;
        this.deliveredDateTime = deliveredDateTime;
        this.typeId = typeId;
        this.typeName = typeName;
        this.finalMessage = finalMessage;
        this.address = address;
        this.language = language;
        this.status = status;
        this.deliveryAttempts = deliveryAttempts;
    }
}

export default Notification;