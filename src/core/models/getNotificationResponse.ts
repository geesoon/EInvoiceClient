import Metadata from "./metadata";

class GetNotificationResponse {
    public result: Notification[];
    public metadata: Metadata;

    constructor(result: Notification[], metadata: Metadata) {
        this.result = result;
        this.metadata = metadata;
    }
}

export default GetNotificationResponse;