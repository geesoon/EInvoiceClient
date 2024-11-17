import { faker } from "@faker-js/faker/.";
import { EInvoiceClientTestStep } from "./EInvoiceClient.test.step";
import { cancelDocumentRequestBuilder, cancelDocumentResponseBuilder, documentDetailsBuilder, documentExtendedBuilder, documentTypeBuilder, documentTypeResponseBuilder, getDocumentDetailRequestBuilder, getDocumentRequestBuilder, getNotificationRequestBuilder, getNotificationResponseBuilder, getRecentDocumentRequest, getRecentDocumentResponse, getSubmissionRequestBuilder, getSubmissionResponseBuilder, loginRequestBuilder, loginResponseBuilder, searchDocumentRequestBuilder, searchDocumentResponseBuilder, submissionResponseBuilder, submitDocumentRequestBuilder, validateTinRequestBuilder } from "./builders/testDataBuilder";

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

    describe('submitDocumentAsync', () => {
        it('should return submitDocumentResponse', async () => {
            const request = submitDocumentRequestBuilder.one();
            const expectedResponse = submissionResponseBuilder.one();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentSubmissionEndpoint.submitDocumentsAsync, expectedResponse)
                .WhenICallClientMethod(step.client.submitDocumentsAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentSubmissionEndpoint.submitDocumentsAsync, request, "access-token");
        });
    });

    describe('getSubmissionAsync', () => {
        it('should return getSubmissionResponse', async () => {
            const request = getSubmissionRequestBuilder.one();
            const expectedResponse = getSubmissionResponseBuilder.one();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentSubmissionEndpoint.getSubmissionAsync, expectedResponse)
                .WhenICallClientMethod(step.client.getSubmissionAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentSubmissionEndpoint.getSubmissionAsync, request, "access-token");
        });
    });

    describe('cancelDocumentAsync', () => {
        it('should return cancelDocumentResponse', async () => {
            const request = cancelDocumentRequestBuilder.one();
            const expectedResponse = cancelDocumentResponseBuilder.one();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentEndpoint.cancelDocumentAsync, expectedResponse)
                .WhenICallClientMethod(step.client.cancelDocumentAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentEndpoint.cancelDocumentAsync, request, "access-token");
        });
    });

    describe('rejectDocumentAsync', () => {
        it('should return cancelDocumentResponse', async () => {
            const request = cancelDocumentRequestBuilder.one();
            const expectedResponse = cancelDocumentResponseBuilder.one();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentEndpoint.rejectDocumentAsync, expectedResponse)
                .WhenICallClientMethod(step.client.rejectDocumentAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentEndpoint.rejectDocumentAsync, request, "access-token");
        });
    });

    describe('getRecentDocumentAsync', () => {
        it('should return getRecentDocumentResponse', async () => {
            const request = getRecentDocumentRequest.one();
            const expectedResponse = getRecentDocumentResponse.one();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentEndpoint.getRecentDocumentAsync, expectedResponse)
                .WhenICallClientMethod(step.client.getRecentDocumentAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentEndpoint.getRecentDocumentAsync, request, "access-token");
        });
    });

    describe('searchDocumentAsync', () => {
        it('should return searchDocumentResponse', async () => {
            const request = searchDocumentRequestBuilder.one();
            const expectedResponse = searchDocumentResponseBuilder.one();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentEndpoint.searchDocumentAsync, expectedResponse)
                .WhenICallClientMethod(step.client.searchDocumentAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentEndpoint.searchDocumentAsync, request, "access-token");
        });
    });

    describe('getDocumentAsync', () => {
        it('should return documentExtended', async () => {
            const request = getDocumentRequestBuilder.one();
            const expectedResponse = documentExtendedBuilder.one();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentEndpoint.getDocumentAsync, expectedResponse)
                .WhenICallClientMethod(step.client.getDocumentAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentEndpoint.getDocumentAsync, request, "access-token");
        });
    });

    describe('getDocumentDetailAsync', () => {
        it('should return documentDetails', async () => {
            const request = getDocumentDetailRequestBuilder.one();
            const expectedResponse = documentDetailsBuilder.one();

            await step
                .GivenClientWithTokenStore()
                .GivenEndpointReturns(step.mockDocumentEndpoint.getDocumentDetailAsync, expectedResponse)
                .WhenICallClientMethod(step.client.getDocumentDetailAsync.bind(step.client), request);

            step
                .ThenIExpectActualResponseToBe(expectedResponse)
                .ThenIExpectEndpointToHaveBeenCalledWith(step.mockDocumentEndpoint.getDocumentDetailAsync, request, "access-token");
        });
    });
});