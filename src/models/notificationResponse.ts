import Metadata from "./metadata";

class NotificationResponse {
    public result: Notification[];
    public metadata: Metadata;

    constructor(result: Notification[], metadata: Metadata) {
        this.result = result;
        this.metadata = metadata;
    }
}

export default NotificationResponse;