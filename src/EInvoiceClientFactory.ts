import AxiosHttpClient from "./axiosHttpClient";
import EInvoiceClient from "./eInvoiceClient";
import LoginEndpoint from "./endpoints/platform/loginEndpoint";
import DocumentTypeEndpoint from "./endpoints/platform/documentTypeEndpoint";
import NotificationEndpoint from "./endpoints/platform/notificationEndpoint";
import { URL } from "url";

class EInvoiceClientFactory {
    static createClient(baseURL: URL): EInvoiceClient {
        const httpClient = new AxiosHttpClient();
        return new EInvoiceClient(
            new LoginEndpoint(baseURL, httpClient),
            new DocumentTypeEndpoint(baseURL, httpClient),
            new NotificationEndpoint(baseURL, httpClient),
        )
    }
}

export default EInvoiceClientFactory;