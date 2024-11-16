import EInvoiceClient from "@/core/eInvoiceClient";
import DocumentEndpoint from "@/core/endpoints/eInvoice/documentEndpoint";
import DocumentSubmissionEndpoint from "@/core/endpoints/eInvoice/documentSubmissionEndpoint";
import ValidateTinEndpoint from "@/core/endpoints/eInvoice/validateTinEndpoint";
import DocumentTypeEndpoint from "@/core/endpoints/platform/documentTypeEndpoint";
import LoginEndpoint from "@/core/endpoints/platform/loginEndpoint";
import NotificationEndpoint from "@/core/endpoints/platform/notificationEndpoint";
import IHttpClient from "@/core/IHttpClient";
import ITokenStore from "@/core/ITokenStore";
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
    loginResponse: LoginResponse | null = null;

    constructor() {
        this.mockTokenStore = {
            getAccessToken: jest.fn(),
        } as jest.Mocked<ITokenStore>;
        this.mockHttpClient = {
            get: jest.fn(),
            post: jest.fn(),
            put: jest.fn()
        } as jest.Mocked<IHttpClient>;
        this.mockLoginEndpoint = new LoginEndpoint(this.baseUrl, this.mockHttpClient) as jest.Mocked<LoginEndpoint>;
        this.mockDocumentTypeEndpoint = new DocumentTypeEndpoint(this.baseUrl, this.mockHttpClient) as jest.Mocked<DocumentTypeEndpoint>;
        this.mockNotificationEndpoint = new NotificationEndpoint(this.baseUrl, this.mockHttpClient) as jest.Mocked<NotificationEndpoint>;
        this.mockValidateTinEndpoint = new ValidateTinEndpoint(this.baseUrl, this.mockHttpClient) as jest.Mocked<ValidateTinEndpoint>;
        this.mockDocumentEndpoint = new DocumentEndpoint(this.baseUrl, this.mockHttpClient) as jest.Mocked<DocumentEndpoint>;
        this.mockDocumentSubmissionEndpoint = new DocumentSubmissionEndpoint(this.baseUrl, this.mockHttpClient) as jest.Mocked<DocumentSubmissionEndpoint>;

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

    public GivenLoginEndpointLoginAsyncReturns(loginResponse: LoginResponse): this {
        this.mockLoginEndpoint.loginAsync.mockResolvedValue(loginResponse);
        return this;
    }

    public async WhenICallLoginAsync(loginRequest: LoginRequest): Promise<this> {
        this.loginResponse = await this.client.loginAsync(loginRequest);
        return this;
    }

    public ThenIExpectLoginResponseToBe(expectedLoginResponse: LoginResponse): this {
        expect(this.loginResponse).toBe(expectedLoginResponse);
        return this;
    }

    public ThenIExpectLoginAsyncToHaveBeCalledWith(loginRequest: LoginRequest): this {
        expect(this.mockLoginEndpoint.loginAsync).toHaveBeenCalledWith(loginRequest);
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
}