import EInvoiceClient from "@/eInvoiceClient";
import DocumentEndpoint from "@/endpoints/eInvoice/documentEndpoint";
import DocumentSubmissionEndpoint from "@/endpoints/eInvoice/documentSubmissionEndpoint";
import ValidateTinEndpoint from "@/endpoints/eInvoice/validateTinEndpoint";
import DocumentTypeEndpoint from "@/endpoints/platform/documentTypeEndpoint";
import LoginEndpoint from "@/endpoints/platform/loginEndpoint";
import NotificationEndpoint from "@/endpoints/platform/notificationEndpoint";
import IHttpClient from "@/IHttpClient";
import LoginRequest from "@/models/loginRequest";
import LoginResponse from "@/models/loginResponse";
import { faker } from "@faker-js/faker/.";
import Session from "@/models/session";
import TokenStore from "@/tokenStore";
import ITokenStore from "@/ITokenStore";

// Mocking the external dependencies
jest.mock('@/endpoints/platform/loginEndpoint');
jest.mock('@/endpoints/platform/documentTypeEndpoint');
jest.mock('@/endpoints/platform/notificationEndpoint');
jest.mock('@/endpoints/eInvoice/validateTinEndpoint');
jest.mock('@/endpoints/eInvoice/documentEndpoint');
jest.mock('@/endpoints/eInvoice/documentSubmissionEndpoint');
jest.mock('@/tokenStore');
jest.mock("@/IHttpClient");

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