import LoginRequest from "src/core/models/loginRequest";
import LoginResponse from "src/core/models/loginResponse";
import { Builder } from "./builders/Builder";
import { EInvoiceClientTestStep } from "./EInvoiceClient.test.step";

describe('EInvoiceClient', () => {
    let step: EInvoiceClientTestStep;

    beforeEach(() => {
        step = new EInvoiceClientTestStep();
    });

    describe('loginAsync', () => {
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
                .ThenIExpectLoginResponseToBe(expectedResponse)
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
    })

    // describe('getDocumentTypeAsync', () => {
    //     it('should return document types', async () => {
    //         // Arrange
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
    //         const mockDocumentTypeResponse: DocumentTypeResponse = { result: [mockDocumentType] };
    //         mockDocumentTypeEndpoint.getAsync.mockResolvedValue(mockDocumentTypeResponse);
    //         client['tokenStore'] = { getAccessToken: jest.fn().mockReturnValue('accessToken') };

    //         // Act
    //         const response = await client.getDocumentTypeAsync();

    //         // Assert
    //         expect(response).toEqual(mockDocumentTypeResponse);
    //         expect(mockDocumentTypeEndpoint.getAsync).toHaveBeenCalledWith('accessToken');
    //     });
    // });
});