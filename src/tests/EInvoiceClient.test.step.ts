import EInvoiceClient from "src/core/eInvoiceClient";
import DocumentEndpoint from "src/core/endpoints/eInvoice/documentEndpoint";
import DocumentSubmissionEndpoint from "src/core/endpoints/eInvoice/documentSubmissionEndpoint";
import ValidateTinEndpoint from "src/core/endpoints/eInvoice/validateTinEndpoint";
import DocumentTypeEndpoint from "src/core/endpoints/platform/documentTypeEndpoint";
import LoginEndpoint from "src/core/endpoints/platform/loginEndpoint";
import NotificationEndpoint from "src/core/endpoints/platform/notificationEndpoint";
import IHttpClient from "src/core/IHttpClient";
import ITokenStore from "src/core/ITokenStore";
import LoginRequest from "src/core/models/loginRequest";
import LoginResponse from "src/core/models/loginResponse";

// Mocking the external dependencies
jest.mock('../endpoints/platform/loginEndpoint');
jest.mock('../endpoints/platform/documentTypeEndpoint');
jest.mock('../endpoints/platform/notificationEndpoint');
jest.mock('../endpoints/eInvoice/validateTinEndpoint');
jest.mock('../endpoints/eInvoice/documentEndpoint');
jest.mock('../endpoints/eInvoice/documentSubmissionEndpoint');
jest.mock('../tokenStore');
jest.mock("../IHttpClient");

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
            this.mockDocumentSubmissionEndpoint
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
        this.loginResponse = await this.mockLoginEndpoint.loginAsync(loginRequest);
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