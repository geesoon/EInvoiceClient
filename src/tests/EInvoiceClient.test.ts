import { faker } from "@faker-js/faker/.";
import { EInvoiceClientTestStep } from "./EInvoiceClient.test.step";
import { documentTypeBuilder, documentTypeResponseBuilder, documentTypeVersionBuilder, getNotificationRequestBuilder, getNotificationResponseBuilder, loginRequestBuilder, loginResponseBuilder, validateTinRequestBuilder, workflowParameterBuilder } from "./builders/testDataBuilder";
import { version } from "os";

describe('EInvoiceClient', () => {
    let step: EInvoiceClientTestStep;

    beforeEach(() => {
        step = new EInvoiceClientTestStep();
        jest.clearAllMocks();
    });

    describe('loginAsync as tax payer', () => {
        it('should store token on successful login', async () => {
            let request = loginRequestBuilder().one();

            const expectedResponse = loginResponseBuilder.one();
            await step
                .GivenEndpointReturns(step.mockLoginEndpoint.loginAsync, expectedResponse)
                .WhenICallClientMethod(step.client.loginAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockLoginEndpoint.loginAsync, request)
                .ThenIExpectTokenStoreToNotBeNull();
        });
    });

    describe('loginAsync as intermediary system', () => {
        it('should store token on successful login', async () => {
            const request = loginRequestBuilder().withOnBehalfOf();
            const expectedResponse = loginResponseBuilder.one();

            await step
                .GivenEndpointReturns(step.mockLoginEndpoint.loginAsync, expectedResponse)
                .WhenICallClientMethod(step.client.loginAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockLoginEndpoint.loginAsync, request)
                .ThenIExpectTokenStoreToNotBeNull();
        });
    });

    describe('loginAsync with token store', () => {
        it('should not overwrite token store if already initialized', async () => {
            const request = loginRequestBuilder().one();

            await step
                .GivenClientWithTokenStore()
                .WhenICallClientMethod(step.client.loginAsync.bind(step.client), request);

            step
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockLoginEndpoint.loginAsync, request)
                .ThenIExpectCreateTokenStoreToNotModified();
        });
    });

    describe('getDocumentTypeAsync', () => {
        it('should return document types', async () => {
            const expectedDocumentTypeResponse = documentTypeResponseBuilder.one();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentTypeEndpoint.getAsync, expectedDocumentTypeResponse)
                .WhenICallClientMethod(step.client.getDocumentTypeAsync.bind(step.client));

            step
                .ThenIExpectActualResponseToBe(expectedDocumentTypeResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentTypeEndpoint.getAsync, "access-token");
        });
    });

    describe('getDocumentTypeByIdAsync', () => {
        it('should return document types', async () => {
            const expectedDocumentType = documentTypeBuilder.one();
            const id = faker.number.int();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentTypeEndpoint.getByIdAsync, expectedDocumentType)
                .WhenICallClientMethod(step.client.getDocumentTypeByIdAsync.bind(step.client), id);

            step
                .ThenIExpectActualResponseToBe(expectedDocumentType)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentTypeEndpoint.getByIdAsync, id, "access-token");
        })
    });

    describe('getDocumentTypeByVersionAsync', () => {
        it('should return document type version', async () => {
            const expectedDocumentType = documentTypeBuilder.one();
            const id = faker.number.int();
            const versionId = faker.number.int();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentTypeEndpoint.getByVersionAsync, expectedDocumentType)
                .WhenICallClientMethod(step.client.getDocumentTypeByVersionAsync.bind(step.client), id, versionId)

            step
                .ThenIExpectActualResponseToBe(expectedDocumentType)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentTypeEndpoint.getByVersionAsync, id, versionId, "access-token");
        });
    });

    describe('getNotificationAsync', () => {
        it('should return notification response', async () => {
            const request = getNotificationRequestBuilder.one();
            const expectedNotificationResponse = getNotificationResponseBuilder.one();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockNotificationEndpoint.getAsync, expectedNotificationResponse)
                .WhenICallClientMethod(step.client.getNotificationAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedNotificationResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockNotificationEndpoint.getAsync, request, "access-token");
        });
    });

    describe('validateTinAsync', () => {
        it('should return boolean', async () => {
            const request = validateTinRequestBuilder.one();
            const expectedResponse = false;

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockValidateTinEndpoint.validateTinAsync, expectedResponse)
                .WhenICallClientMethod(step.client.validateTinAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockValidateTinEndpoint.validateTinAsync, request, "access-token");
        });
    });
});