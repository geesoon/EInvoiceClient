
import LoginRequest from "@/core/models/loginRequest";
import LoginResponse from "@/core/models/loginResponse";
import { Builder } from "./builders/Builder";
import { EInvoiceClientTestStep } from "./EInvoiceClient.test.step";
import DocumentTypeResponse from "@/core/models/documentTypeResponse";
import DocumentTypeVersion from "@/core/models/documentTypeVersion";
import DocumentTypeVersionStatus from "@/core/models/documentTypeVersionStatus";
import WorkFlowParameter from "@/core/models/workflowParameter";
import { faker } from "@faker-js/faker/.";
import DocumentType from "@/core/models/documentType";

describe('EInvoiceClient', () => {
    let step: EInvoiceClientTestStep;

    beforeEach(() => {
        step = new EInvoiceClientTestStep();
        jest.clearAllMocks();
    });

    describe('loginAsync as tax payer', () => {
        it('should store token on successful login', async () => {
            const request = new Builder(LoginRequest)
                .withRandomData()
                .build();

            const expectedResponse = new Builder(LoginResponse)
                .withRandomData()
                .build();

            step
                .GivenLoginEndpointLoginAsyncReturns(expectedResponse);

            await step
                .WhenICallLoginAsync(request);

            step
                .ThenIExpectActualResponseToBe<LoginResponse>(expectedResponse)
                .ThenIExpectLoginAsyncToHaveBeCalledWith(request)
                .ThenIExpectTokenStoreToNotBeNull();
        });
    });

    describe('loginAsync as intermediary system', () => {
        it('should store token on successful login', async () => {
            const request = new Builder(LoginRequest)
                .withRandomData()
                .build();

            request.onBehalfOf = faker.string.uuid();

            const expectedResponse = new Builder(LoginResponse)
                .withRandomData()
                .build();

            step
                .GivenLoginEndpointLoginAsyncReturns(expectedResponse);

            await step
                .WhenICallLoginAsync(request);

            step
                .ThenIExpectActualResponseToBe<LoginResponse>(expectedResponse)
                .ThenIExpectLoginAsyncToHaveBeCalledWith(request)
                .ThenIExpectTokenStoreToNotBeNull();
        });
    });

    describe('loginAsync with token store', () => {
        it('should not overwrite token store if already initialized', async () => {
            const request = new Builder(LoginRequest)
                .withRandomData()
                .build();

            step
                .GivenClientWithTokenStore();

            await step.WhenICallLoginAsync(request);

            step
                .ThenIExpectLoginAsyncToHaveBeCalledWith(request)
                .ThenIExpectCreateTokenStoreToNotModified();
        });
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
            const mockDocumentTypeResponse: DocumentTypeResponse = {
                result: [mockDocumentType]
            };

            await step
                .GivenClientWithTokenStore()
                .GivenGetDocumentTypeEndpointGetAsyncReturns(mockDocumentTypeResponse)
                .WhenICallGetDocumentTypeAsync();

            step
                .ThenIExpectActualResponseToBe<DocumentTypeResponse>(mockDocumentTypeResponse)
                .ThenIExpectDocumentTypeEndpointToHaveBeenCalledWith("access-token");
        });
    });
});