import EInvoiceClient from "@/core/eInvoiceClient";
import DocumentEndpoint from "@/core/endpoints/eInvoice/documentEndpoint";
import DocumentSubmissionEndpoint from "@/core/endpoints/eInvoice/documentSubmissionEndpoint";
import ValidateTinEndpoint from "@/core/endpoints/eInvoice/validateTinEndpoint";
import DocumentTypeEndpoint from "@/core/endpoints/platform/documentTypeEndpoint";
import LoginEndpoint from "@/core/endpoints/platform/loginEndpoint";
import NotificationEndpoint from "@/core/endpoints/platform/notificationEndpoint";
import IHttpClient from "@/core/IHttpClient";
import ITokenStore from "@/core/ITokenStore";
import DocumentType from "@/core/models/documentType";
import DocumentTypeResponse from "@/core/models/documentTypeResponse";
import LoginRequest from "@/core/models/loginRequest";
import LoginResponse from "@/core/models/loginResponse";

// Mocking the external dependencies
jest.mock('../core/endpoints/platform/loginEndpoint.ts');
jest.mock('../core/endpoints/platform/documentTypeEndpoint');
jest.mock('../core/endpoints/platform/notificationEndpoint');
jest.mock('../core/endpoints/eInvoice/validateTinEndpoint');
jest.mock('../core/endpoints/eInvoice/documentEndpoint');
jest.mock('../core/endpoints/eInvoice/documentSubmissionEndpoint');
jest.mock('../core/tokenStore');
jest.mock("../core/IHttpClient");

export class EInvoiceClientTestStep {
    client: EInvoiceClient;
    mockLoginEndpoint: jest.Mocked<LoginEndpoint>;
    mockDocumentTypeEndpoint: jest.Mocked<DocumentTypeEndpoint>;
    mockNotificationEndpoint: jest.Mocked<NotificationEndpoint>;
    mockValidateTinEndpoint: jest.Mocked<ValidateTinEndpoint>;
    mockDocumentEndpoint: jest.Mocked<DocumentEndpoint>;
    mockDocumentSubmissionEndpoint: jest.Mocked<DocumentSubmissionEndpoint>;
    mockHttpClient: jest.Mocked<IHttpClient>;
    mockTokenStore: jest.Mocked<ITokenStore>;
    baseUrl = new URL("https://example.com");
    // spy
    createTokenStoreSpy: jest.SpyInstance | null = null;

    // results
    actualResponse: any = null;

    constructor() {
        this.mockTokenStore = {
            getAccessToken: jest.fn().mockReturnValue("access-token"),
        } as jest.Mocked<ITokenStore>;
        this.mockHttpClient = {
            get: jest.fn(),
            post: jest.fn(),
            put: jest.fn()
        } as jest.Mocked<IHttpClient>;

        this.mockLoginEndpoint = this.createMockEndpoint(LoginEndpoint);
        this.mockDocumentTypeEndpoint = this.createMockEndpoint(DocumentTypeEndpoint);
        this.mockNotificationEndpoint = this.createMockEndpoint(NotificationEndpoint);
        this.mockValidateTinEndpoint = this.createMockEndpoint(ValidateTinEndpoint);
        this.mockDocumentEndpoint = this.createMockEndpoint(DocumentEndpoint);
        this.mockDocumentSubmissionEndpoint = this.createMockEndpoint(DocumentSubmissionEndpoint);

        // Instantiate the client with mocked dependencies
        this.client = new EInvoiceClient(
            this.mockLoginEndpoint,
            this.mockDocumentTypeEndpoint,
            this.mockNotificationEndpoint,
            this.mockValidateTinEndpoint,
            this.mockDocumentEndpoint,
            this.mockDocumentSubmissionEndpoint,
            null
        );
    }

    private createMockEndpoint<T>(EndpointClass: new (...args: any[]) => T): jest.Mocked<T> {
        return new EndpointClass(this.baseUrl, this.mockHttpClient) as jest.Mocked<T>;
    }

    public GivenClientWithTokenStore(): this {
        this.client = new EInvoiceClient(
            this.mockLoginEndpoint,
            this.mockDocumentTypeEndpoint,
            this.mockNotificationEndpoint,
            this.mockValidateTinEndpoint,
            this.mockDocumentEndpoint,
            this.mockDocumentSubmissionEndpoint,
            this.mockTokenStore
        );
        return this;
    }

    public GivenEndpointReturns<T>(endpointMock: jest.MockInstance<any, any[]>, response: T): this {
        endpointMock.mockResolvedValue(response);
        return this;
    }

    public async WhenICallClientMethod(
        method: (...args: any[]) => Promise<any>,
        ...args: any[]
    ): Promise<this> {
        this.actualResponse = await method(...args);
        return this;
    }

    public ThenIExpectActualResponseToBe<T>(expected: T): this {
        expect(this.actualResponse).toBe(expected);
        return this;
    }

    public ThenIExpectTokenStoreToNotBeNull(): this {
        expect(this.client['tokenStore']).not.toBeNull();
        return this;
    }

    public ThenIExpectCreateTokenStoreToNotModified(): this {
        expect(this.client['tokenStore']).toBe(this.mockTokenStore);
        return this;
    }

    public ThenIExpectEndpointToHaveBeenCalledWith(
        endpointMock: jest.Mock | jest.MockInstance<any, any[]>,
        ...expectedArgs: any[]
    ): this {
        expect(endpointMock).toHaveBeenCalledWith(...expectedArgs);
        return this;
    }
}