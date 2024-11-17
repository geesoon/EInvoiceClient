import Metadata from "./metadata";
import Notification from "./notification";

class GetNotificationResponse {
    public result: Notification[];
    public metadata: Metadata;
}

export default GetNotificationResponse;