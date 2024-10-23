import AxiosHttpClient from "./axiosHttpClient";
import EInvoiceClient from "./eInvoiceClient";
import LoginEndpoint from "./endpoints/platform/loginEndpoint";
import DocumentTypeEndpoint from "./endpoints/platform/documentTypeEndpoint";
import NotificationEndpoint from "./endpoints/platform/notificationEndpoint";
import ValidateTinEndpoint from "./endpoints/eInvoice/validateTinEndpoint";
import DocumentEndpoint from "./endpoints/eInvoice/documentEndpoint";
import DocumentSubmissionEndpoint from "./endpoints/eInvoice/documentSubmissionEndpoint";
import IEInvoiceClient from "./IEInvoiceClient";

class EInvoiceClientFactory {
    static createClient(baseURL: URL): IEInvoiceClient {
        const httpClient = new AxiosHttpClient();
        return new EInvoiceClient(
            new LoginEndpoint(baseURL, httpClient),
            new DocumentTypeEndpoint(baseURL, httpClient),
            new NotificationEndpoint(baseURL, httpClient),
            new ValidateTinEndpoint(baseURL, httpClient),
            new DocumentEndpoint(baseURL, httpClient),
            new DocumentSubmissionEndpoint(baseURL, httpClient)
        )
    }
}

export default EInvoiceClientFactory;