
import LoginRequest from "@/core/models/loginRequest";
import LoginResponse from "@/core/models/loginResponse";
import Builder from "./builders/Builder";
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
            const request = new Builder(LoginRequest).populateWithFaker().build();

            // const expectedResponse = new Builder(LoginResponse)
            //     .WithRandomData()
            //     .Build();

            const expectedResponse = {};

            await step
                .GivenEndpointReturns(step.mockLoginEndpoint.loginAsync, expectedResponse)
                .WhenICallClientMethod(step.client.loginAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockLoginEndpoint.loginAsync, request)
                .ThenIExpectTokenStoreToNotBeNull();
        });
    });

    // describe('loginAsync as intermediary system', () => {
    //     it('should store token on successful login', async () => {
    //         const request: LoginRequest = {
    //             clientId: faker.string.uuid(),
    //             clientSecret: faker.string.uuid(),
    //             onBehalfOf: faker.string.uuid(),
    //             grantType: faker.string.uuid(),
    //             scope: faker.string.uuid()
    //         };

    //         request.onBehalfOf = faker.string.uuid();

    //         const expectedResponse = new Builder(LoginResponse)
    //             .WithRandomData()
    //             .Build();

    //         await step
    //             .GivenEndpointReturns(step.mockLoginEndpoint.loginAsync, expectedResponse)
    //             .WhenICallClientMethod(step.client.loginAsync.bind(step.client), request);

    //         step
    //             .ThenIExpectActualResponseToBe(expectedResponse)
    //             .ThenIExpectEndpointToHaveBeenCalledWith(step.mockLoginEndpoint.loginAsync, request)
    //             .ThenIExpectTokenStoreToNotBeNull();
    //     });
    // });

    // describe('loginAsync with token store', () => {
    //     it('should not overwrite token store if already initialized', async () => {
    //         const request = new Builder(LoginRequest)
    //             .WithRandomData()
    //             .Build();

    //         await step
    //             .GivenClientWithTokenStore()
    //             .WhenICallClientMethod(step.client.loginAsync.bind(step.client), request);

    //         step
    //             .ThenIExpectEndpointToHaveBeenCalledWith(step.mockLoginEndpoint.loginAsync, request)
    //             .ThenIExpectCreateTokenStoreToNotModified();
    //     });
    // });

    // describe('getDocumentTypeAsync', () => {
    //     it('should return document types', async () => {
    //         const mockDocumentTypeVersion: DocumentTypeVersion = {
    //             id: faker.number.int(),
    //             name: faker.string.uuid(),
    //             description: faker.string.uuid(),
    //             activeFrom: faker.date.past(),
    //             activeTo: faker.date.future(),
    //             versionNumber: faker.number.int(),
    //             status: DocumentTypeVersionStatus.published
    //         };
    //         const mockWorkFlowParameter: WorkFlowParameter = {
    //             id: faker.number.int(),
    //             parameter: faker.string.uuid(),
    //             value: faker.number.int(),
    //             activeFrom: faker.date.past(),
    //             activeTo: faker.date.future()
    //         };
    //         const mockDocumentType: DocumentType = {
    //             id: faker.number.int(),
    //             invoiceTypeCode: faker.number.int(),
    //             description: faker.string.uuid(),
    //             activeFrom: faker.date.past(),
    //             activeTo: faker.date.future(),
    //             documentTypeVersions: [mockDocumentTypeVersion],
    //             workflowParameter: [mockWorkFlowParameter]
    //         };
    //         const expectedDocumentTypeResponse: DocumentTypeResponse = {
    //             result: [mockDocumentType]
    //         };

    //         await step
    //             .GivenClientWithTokenStore()
    //             .GivenEndpointReturns(step.mockDocumentTypeEndpoint.getAsync, expectedDocumentTypeResponse)
    //             .WhenICallClientMethod(step.client.getDocumentTypeAsync.bind(step.client));

    //         step
    //             .ThenIExpectActualResponseToBe(expectedDocumentTypeResponse)
    //             .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentTypeEndpoint.getAsync, "access-token");
    //     });
    // });

    // describe('getDocumentTypeByIdAsync', () => {
    //     it('should return document types', async () => {
    //         const expectedDocumentType = new Builder(DocumentType)
    //             .WithRandomData()
    //             .Build();

    //         const id = faker.number.int();

    //         await step
    //             .GivenClientWithTokenStore()
    //             .GivenEndpointReturns(step.mockDocumentTypeEndpoint.getByIdAsync, expectedDocumentType)
    //             .WhenICallClientMethod(step.client.getDocumentTypeByIdAsync.bind(step.client), id);

    //         step
    //             .ThenIExpectActualResponseToBe<DocumentType>(expectedDocumentType)
    //             .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentTypeEndpoint.getByIdAsync, id, "access-token");
    //     })
    // });

    // describe('getDocumentTypeByVersionAsync', () => {
    //     it('should return document type version', async () => {
    //         const expectedDocumentTypeVersion = new Builder(DocumentTypeVersion).WithRandomData().Build();

    //         const id = faker.number.int();
    //         const versionId = faker.number.int();

    //         await step
    //             .GivenClientWithTokenStore()
    //     });
    // })
});