import EInvoiceClient from "@/eInvoiceClient";
import DocumentEndpoint from "@/endpoints/eInvoice/documentEndpoint";
import DocumentSubmissionEndpoint from "@/endpoints/eInvoice/documentSubmissionEndpoint";
import ValidateTinEndpoint from "@/endpoints/eInvoice/validateTinEndpoint";
import DocumentTypeEndpoint from "@/endpoints/platform/documentTypeEndpoint";
import LoginEndpoint from "@/endpoints/platform/loginEndpoint";
import NotificationEndpoint from "@/endpoints/platform/notificationEndpoint";
import IHttpClient from "@/IHttpClient";
import DocumentType from "@/models/documentType";
import DocumentTypeResponse from "@/models/documentTypeResponse";
import DocumentTypeVersion from "@/models/documentTypeVersion";
import DocumentTypeVersionStatus from "@/models/documentTypeVersionStatus";
import LoginRequest from "@/models/loginRequest";
import LoginResponse from "@/models/loginResponse";
import WorkFlowParameter from "@/models/workflowParameter";
import TokenStore from "@/tokenStore";
import { faker } from "@faker-js/faker";

// Mocking the external dependencies
jest.mock('@/endpoints/platform/loginEndpoint');
jest.mock('@/endpoints/platform/documentTypeEndpoint');
jest.mock('@/endpoints/platform/notificationEndpoint');
jest.mock('@/endpoints/eInvoice/validateTinEndpoint');
jest.mock('@/endpoints/eInvoice/documentEndpoint');
jest.mock('@/endpoints/eInvoice/documentSubmissionEndpoint');
jest.mock('@/tokenStore');
jest.mock("@/IHttpClient");

describe('EInvoiceClient', () => {
    let client: EInvoiceClient;
    let mockLoginEndpoint: jest.Mocked<LoginEndpoint>;
    let mockDocumentTypeEndpoint: jest.Mocked<DocumentTypeEndpoint>;
    let mockNotificationEndpoint: jest.Mocked<NotificationEndpoint>;
    let mockValidateTinEndpoint: jest.Mocked<ValidateTinEndpoint>;
    let mockDocumentEndpoint: jest.Mocked<DocumentEndpoint>;
    let mockDocumentSubmissionEndpoint: jest.Mocked<DocumentSubmissionEndpoint>;
    let baseUrl = new URL("https://example.com");
    let mockHttpClient: jest.Mocked<IHttpClient>;

    beforeEach(() => {
        // Initialize mocks for each endpoint
        mockLoginEndpoint = new LoginEndpoint(baseUrl, mockHttpClient) as jest.Mocked<LoginEndpoint>;
        mockDocumentTypeEndpoint = new DocumentTypeEndpoint(baseUrl, mockHttpClient) as jest.Mocked<DocumentTypeEndpoint>;
        mockNotificationEndpoint = new NotificationEndpoint(baseUrl, mockHttpClient) as jest.Mocked<NotificationEndpoint>;
        mockValidateTinEndpoint = new ValidateTinEndpoint(baseUrl, mockHttpClient) as jest.Mocked<ValidateTinEndpoint>;
        mockDocumentEndpoint = new DocumentEndpoint(baseUrl, mockHttpClient) as jest.Mocked<DocumentEndpoint>;
        mockDocumentSubmissionEndpoint = new DocumentSubmissionEndpoint(baseUrl, mockHttpClient) as jest.Mocked<DocumentSubmissionEndpoint>;

        // Instantiate the client with mocked dependencies
        client = new EInvoiceClient(
            mockLoginEndpoint,
            mockDocumentTypeEndpoint,
            mockNotificationEndpoint,
            mockValidateTinEndpoint,
            mockDocumentEndpoint,
            mockDocumentSubmissionEndpoint
        );
    });

    describe('loginAsync', () => {
        it('should store token on successful login', async () => {
            // Arrange
            const mockLoginResponse: LoginResponse = {
                accessToken: faker.string.uuid(),
                tokenType: faker.string.uuid(),
                expiresIn: faker.number.int(),
                scope: faker.string.uuid()
            };
            mockLoginEndpoint.loginAsync.mockResolvedValue(mockLoginResponse);
            const request: LoginRequest = {
                clientId: faker.string.uuid(),
                clientSecret: faker.string.uuid(),
                onBehalfOf: faker.string.uuid(),
                scope: faker.string.uuid(),
                grantType: faker.string.uuid()
            };

            // Act
            const response = await client.loginAsync(request);

            // Assert
            expect(response).toEqual(mockLoginResponse);
            expect(mockLoginEndpoint.loginAsync).toHaveBeenCalledWith(request);
            expect(client['tokenStore']).not.toBeNull();  // Ensure token store is set
        });

        // it('should not overwrite token store if already initialized', async () => {
        //     // Arrange
        //     const mockLoginResponse: LoginResponse = {
        //         accessToken: faker.string.uuid(),
        //         tokenType: faker.string.uuid(),
        //         expiresIn: faker.number.int(),
        //         scope: faker.string.uuid()
        //     };
        //     mockLoginEndpoint.loginAsync.mockResolvedValue(mockLoginResponse);
        //     const request: LoginRequest = {
        //         clientId: faker.string.uuid(),
        //         clientSecret: faker.string.uuid(),
        //         onBehalfOf: faker.string.uuid(),
        //         scope: faker.string.uuid(),
        //         grantType: faker.string.uuid()
        //     };

        //     // Act
        //     await client.loginAsync(request);

        //     // Assert
        //     expect(mockLoginEndpoint.loginAsync).toHaveBeenCalledWith(request);
        //     // TokenStore should remain the same and not reset
        //     expect(TokenStore).toHaveBeenCalledTimes(0);
        // });
    });

    describe('getDocumentTypeAsync', () => {
        it('should return document types', async () => {
            // Arrange
            const mockDocumentTypeVersion: DocumentTypeVersion = {
                id: faker.number.int(),
                name: faker.string.uuid(),
                description: faker.string.uuid(),
                activeFrom: faker.date.past(),
                activeTo: faker.date.future(),
                versionNumber: faker.number.int(),
                status: DocumentTypeVersionStatus.published
            };
            const mockWorkFlowParameter: WorkFlowParameter = {
                id: faker.number.int(),
                parameter: faker.string.uuid(),
                value: faker.number.int(),
                activeFrom: faker.date.past(),
                activeTo: faker.date.future()
            };
            const mockDocumentType: DocumentType = {
                id: faker.number.int(),
                invoiceTypeCode: faker.number.int(),
                description: faker.string.uuid(),
                activeFrom: faker.date.past(),
                activeTo: faker.date.future(),
                documentTypeVersions: [mockDocumentTypeVersion],
                workflowParameter: [mockWorkFlowParameter]
            };
            const mockDocumentTypeResponse: DocumentTypeResponse = { result: [mockDocumentType] };
            mockDocumentTypeEndpoint.getAsync.mockResolvedValue(mockDocumentTypeResponse);
            client['tokenStore'] = { getAccessToken: jest.fn().mockReturnValue('accessToken') };

            // Act
            const response = await client.getDocumentTypeAsync();

            // Assert
            expect(response).toEqual(mockDocumentTypeResponse);
            expect(mockDocumentTypeEndpoint.getAsync).toHaveBeenCalledWith('accessToken');
        });
    });
});