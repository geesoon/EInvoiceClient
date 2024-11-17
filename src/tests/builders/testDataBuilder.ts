import CancelDocumentRequest from "@/core/models/cancelDocumentRequest";
import CancelDocumentResponse from "@/core/models/cancelDocumentResponse";
import DeliveryAttempt from "@/core/models/deliveryAttempt";
import Document from "@/core/models/document";
import DocumentDetails from "@/core/models/documentDetail";
import DocumentExtended from "@/core/models/documentExtended";
import DocumentSummary from "@/core/models/documentSummary";
import DocumentType from "@/core/models/documentType";
import DocumentTypeResponse from "@/core/models/documentTypeResponse";
import DocumentTypeVersion from "@/core/models/documentTypeVersion";
import DocumentTypeVersionStatus from "@/core/models/documentTypeVersionStatus";
import DocumentValidationResults from "@/core/models/documentValidationResults";
import GetDocumentDetailRequest from "@/core/models/getDocumentDetailRequest";
import GetDocumentRequest from "@/core/models/getDocumentRequest";
import GetNotificationRequest from "@/core/models/getNotificationRequest";
import GetNotificationResponse from "@/core/models/getNotificationResponse";
import GetRecentDocumentRequest from "@/core/models/getRecentDocumentRequest";
import GetRecentDocumentResponse from "@/core/models/getRecentDocumentResponse";
import GetSubmissionRequest from "@/core/models/getSubmissionRequest";
import GetSubmissionResponse from "@/core/models/getSubmissionResponse";
import Language from "@/core/models/language";
import LoginRequest from "@/core/models/loginRequest";
import LoginResponse from "@/core/models/loginResponse";
import Metadata from "@/core/models/metadata";
import Notification from "@/core/models/notification";
import NotificationDeliveryStatus from "@/core/models/notificationDeliveryStatus";
import NotificationStatus from "@/core/models/notificationStatus";
import NotificationType from "@/core/models/notificationTypes";
import QueryDocumentMetadata from "@/core/models/queryDocumentMetadata";
import RecentDocumentResult from "@/core/models/recentDocument";
import SearchDocumentRequest from "@/core/models/searchDocumentRequest";
import SearchDocumentResponse from "@/core/models/searchDocumentResponse";
import SearchDocumentResult from "@/core/models/searchDocumentResult";
import StandardErrorResponse from "@/core/models/standardErrorResponse";
import SubmitDocumentRequest from "@/core/models/submitDocumentRequest";
import ValidateTinRequest from "@/core/models/validateTinRequest";
import ValidationStepResult from "@/core/models/validationStepResult";
import WorkFlowParameter from "@/core/models/workflowParameter";
import { faker } from "@faker-js/faker/.";
import { build, oneOf } from "@jackfranklin/test-data-bot";

export const loginRequestBuilder = () => {
    const builder = build<LoginRequest>({
        fields: {
            clientId: faker.string.uuid(),
            clientSecret: faker.string.uuid(),
            grantType: "client_credentials",
            scope: "InvoicingAPI",
            onBehalfOf: null,
        }
    });

    return {
        ...builder,
        withOnBehalfOf(id: string | null = null) {
            if (!id) {
                id = faker.string.uuid();
            }
            return builder({ overrides: { onBehalfOf: id } });
        }
    }
}

export const loginResponseBuilder = build<LoginResponse>({
    fields: {
        accessToken: faker.string.uuid(),
        tokenType: faker.string.uuid(),
        expiresIn: faker.number.int(),
        scope: faker.string.uuid()
    }
});

export const documentTypeVersionBuilder = build<DocumentTypeVersion>({
    fields: {
        id: faker.number.int(),
        name: faker.string.uuid(),
        description: faker.string.uuid(),
        activeFrom: faker.date.past(),
        activeTo: faker.date.future(),
        versionNumber: faker.number.int(),
        status: DocumentTypeVersionStatus.published
    }
});

export const workflowParameterBuilder = build<WorkFlowParameter>({
    fields: {
        id: faker.number.int(),
        parameter: faker.string.uuid(),
        value: faker.number.int(),
        activeFrom: faker.date.past(),
        activeTo: faker.date.future(),
    }
});

export const documentTypeBuilder = build<DocumentType>({
    fields: {
        id: faker.number.int(),
        invoiceTypeCode: faker.number.int(),
        description: faker.string.uuid(),
        activeFrom: faker.date.past(),
        activeTo: faker.date.future(),
        documentTypeVersions: documentTypeVersionBuilder.many(5),
        workflowParameter: workflowParameterBuilder.many(5),
    }
});

export const documentTypeResponseBuilder = build<DocumentTypeResponse>({
    fields: {
        result: documentTypeBuilder.many(5),
    }
});

export const getNotificationRequestBuilder = build<GetNotificationRequest>({
    fields: {
        dateFrom: faker.date.past(),
        dateTo: faker.date.future(),
        type: faker.helpers.enumValue(NotificationType),
        language: faker.helpers.enumValue(Language),
        status: faker.helpers.enumValue(NotificationStatus),
        pageNo: faker.number.int(),
        pageSize: faker.number.int(),
    }
});

export const deliveryAttemptBuilder = build<DeliveryAttempt>({
    fields: {
        attemptDateTime: faker.date.anytime(),
        status: faker.helpers.enumValue(NotificationDeliveryStatus),
        statusDetails: faker.string.uuid(),
    }
});

export const notificationBuilder = build<Notification>({
    fields: {
        notificationId: faker.string.uuid(),
        receiverName: faker.string.uuid(),
        notificationDeliveryId: faker.string.uuid(),
        creationDateTime: faker.date.past(),
        receivedDateTime: faker.date.future(),
        notificationSubject: faker.string.uuid(),
        deliveredDateTime: faker.date.future(),
        typeId: faker.string.uuid(),
        typeName: faker.string.uuid(),
        finalMessage: faker.string.uuid(),
        address: faker.string.uuid(),
        language: faker.helpers.enumValue(Language),
        status: faker.helpers.enumValue(NotificationStatus),
        deliveryAttempts: deliveryAttemptBuilder.many(5),
    }
});

export const metadataBuilder = build<Metadata>({
    fields: {
        hasNext: faker.datatype.boolean(),
    }
});

export const getNotificationResponseBuilder = build<GetNotificationResponse>({
    fields: {
        result: notificationBuilder.many(5),
        metadata: metadataBuilder.one(),
    }
});

export const validateTinRequestBuilder = build<ValidateTinRequest>({
    fields: {
        tin: faker.string.uuid(),
        idType: faker.string.uuid(),
        idValue: faker.string.uuid(),
    }
});

export const documentBuilder = build<Document>({
    fields: {
        format: faker.string.uuid(),
        document: faker.string.uuid(),
        documentHash: faker.string.uuid(),
        codeNumber: faker.string.uuid(),
    }
});

export const submitDocumentRequestBuilder = build<SubmitDocumentRequest>({
    fields: {
        documents: documentBuilder.many(10),
    }
});

export const documentSummaryBuilder = build<DocumentSummary>({
    fields: {
        uuid: faker.string.uuid(),
        submissionUid: faker.string.uuid(),
        longId: faker.string.uuid(),
        internalId: faker.string.uuid(),
        typeName: faker.string.uuid(),
        typeVersionName: faker.string.uuid(),
        issuerTin: faker.string.uuid(),
        issuerName: faker.string.uuid(),
        receiverId: faker.string.uuid(),
        receiverName: faker.string.uuid(),
        dateTimeIssued: faker.date.past(),
        dateTimeReceived: faker.date.past(),
        dateTimeValidated: faker.date.past(),
        totalExcludingTax: faker.number.int(),
        totalDiscount: faker.number.int(),
        totalNetAmount: faker.number.int(),
        totalPayableAmount: faker.number.int(),
        status: faker.string.uuid(),
        cancelDateTime: faker.date.past(),
        rejectRequestDateTime: faker.date.past(),
        documentStatusReason: faker.string.uuid(),
        createdByUserId: faker.string.uuid(),
    }
});

export const submissionResponseBuilder = build<GetSubmissionResponse>({
    fields: {
        submissionUid: faker.string.uuid(),
        documentCount: faker.number.int(),
        dateTimeReceived: faker.date.past(),
        overallStatus: faker.string.uuid(),
        documentSummary: documentSummaryBuilder.many(5),
    }
});

export const getSubmissionRequestBuilder = build<GetSubmissionRequest>({
    fields: {
        submissionUid: faker.string.uuid(),
        pageNo: faker.number.int(),
        pageSize: faker.number.int(),
    }
});

export const getSubmissionResponseBuilder = build<GetSubmissionResponse>({
    fields: {
        submissionUid: faker.string.uuid(),
        documentCount: faker.number.int(),
        dateTimeReceived: faker.date.past(),
        overallStatus: faker.string.uuid(),
        documentSummary: documentSummaryBuilder.many(5),
    }
});

export const cancelDocumentRequestBuilder = build<CancelDocumentRequest>({
    fields: {
        uuid: faker.string.uuid(),
        reason: faker.string.uuid(),
        status: faker.string.uuid(),
    }
});

export const standardErrorResponseBuilder = build<StandardErrorResponse>({
    fields: {
        propertyName: faker.string.uuid(),
        propertyPath: faker.string.uuid(),
        errorCode: faker.string.uuid(),
        error: faker.string.uuid(),
        errorMS: faker.string.uuid(),
        target: faker.string.uuid(),
        innerError: [],
    }
});

export const cancelDocumentResponseBuilder = build<CancelDocumentResponse>({
    fields: {
        uuid: faker.string.uuid(),
        status: faker.string.uuid(),
        error: standardErrorResponseBuilder.one(),
    }
});

export const getRecentDocumentRequest = build<GetRecentDocumentRequest>({
    fields: {
        pageNo: faker.number.int(),
        pageSize: faker.number.int(),
        submissionDateFrom: faker.date.past(),
        issueDateFrom: faker.date.future(),
        issueDateTo: faker.date.future(),
        invoiceDirection: faker.string.uuid(),
        status: faker.string.uuid(),
        documentType: faker.string.uuid(),
        receiverId: faker.string.uuid(),
        receiverIdType: faker.string.uuid(),
        issuerIdType: faker.string.uuid(),
        receiverTin: faker.string.uuid(),
        issuerTin: faker.string.uuid(),
        issuerId: faker.string.uuid(),
    }
});

export const queryDocumentMetadataBuilder = build<QueryDocumentMetadata>({
    fields: {
        totalCount: faker.number.int(),
        totalPages: faker.number.int(),
    }
});

export const recentDocumentResultBuilder = build<RecentDocumentResult>({
    fields: {
        uuid: faker.string.uuid(),
        submissionUID: faker.string.uuid(),
        longId: faker.string.uuid(),
        internalId: faker.string.uuid(),
        typeName: faker.string.uuid(),
        typeVersionName: faker.string.uuid(),
        issuerTin: faker.string.uuid(),
        receiverId: faker.string.uuid(),
        receiverName: faker.string.uuid(),
        dateTimeIssued: faker.date.past(),
        dateTimeReceived: faker.date.past(),
        dateTimeValidated: faker.date.past(),
        totalSales: faker.number.int(),
        totalDiscount: faker.number.int(),
        netAmount: faker.number.int(),
        total: faker.number.int(),
        status: faker.string.uuid(),
        cancelDateTime: faker.date.past(),
        rejectRequestDateTime: faker.date.past(),
        documentStatusReason: faker.string.uuid(),
        createdByUserId: faker.string.uuid(),
        supplierTin: faker.string.uuid(),
        supplierName: faker.string.uuid(),
        submissionChannel: faker.string.uuid(),
        intermediaryName: faker.string.uuid(),
        intermediaryTin: faker.string.uuid(),
        buyerName: faker.string.uuid(),
        buyerTin: faker.string.uuid(),
    }
});

export const getRecentDocumentResponse = build<GetRecentDocumentResponse>({
    fields: {
        metadata: queryDocumentMetadataBuilder.one(),
        result: recentDocumentResultBuilder.many(5),
    }
});

export const searchDocumentRequestBuilder = build<SearchDocumentRequest>({
    fields: {
        uuid: faker.string.uuid(),
        submissionDateFrom: faker.date.past(),
        submissionDateTo: faker.date.past(),
        pageSize: faker.number.int(),
        pageNo: faker.number.int(),
        issueDateFrom: faker.date.past(),
        issueDateTo: faker.date.past(),
        invoiceDirection: faker.string.uuid(),
        status: faker.string.uuid(),
        documentType: faker.string.uuid(),
        searchQuery: faker.string.uuid(),
    }
});

export const searchDocumentResultBuilder = build<SearchDocumentResult>({
    fields: {
        uuid: faker.string.uuid(),
        submissionUID: faker.string.uuid(),
        longId: faker.string.uuid(),
        internalId: faker.string.uuid(),
        typeName: faker.string.uuid(),
        typeVersionName: faker.string.uuid(),
        issuerTin: faker.string.uuid(),
        issuerName: faker.string.uuid(),
        receiverId: faker.string.uuid(),
        receiverName: faker.string.uuid(),
        dateTimeIssued: faker.date.past(),
        dateTimeReceived: faker.date.past(),
        dateTimeValidated: faker.date.past(),
        totalSales: faker.number.int(),
        totalDiscount: faker.number.int(),
        netAmount: faker.number.int(),
        total: faker.number.int(),
        status: faker.string.uuid(),
        cancelDateTime: faker.date.past(),
        rejectRequestDateTime: faker.date.past(),
        documentStatusReason: faker.string.uuid(),
        createdByUserId: faker.string.uuid(),
        supplierTIN: faker.string.uuid(),
        supplierName: faker.string.uuid(),
        submissionChannel: faker.string.uuid(),
        intermediaryName: faker.string.uuid(),
        intermediaryTIN: faker.string.uuid(),
        buyerName: faker.string.uuid(),
        buyerTIN: faker.string.uuid(),
    }
});

export const searchDocumentResponseBuilder = build<SearchDocumentResponse>({
    fields: {
        metadata: queryDocumentMetadataBuilder.one(),
        result: searchDocumentResultBuilder.many(5),
    }
});

export const getDocumentRequestBuilder = build<GetDocumentRequest>({
    fields: {
        uuid: faker.string.uuid(),
    }
});

export const documentExtendedBuilder = build<DocumentExtended>({
    fields: {
        uuid: faker.string.uuid(),
        submissionUid: faker.string.uuid(),
        longId: faker.string.uuid(),
        internalId: faker.string.uuid(),
        typeName: faker.string.uuid(),
        typeVersionName: faker.string.uuid(),
        issuerTin: faker.string.uuid(),
        issuerName: faker.string.uuid(),
        receiverId: faker.string.uuid(),
        receiverName: faker.string.uuid(),
        dateTimeIssued: faker.string.uuid(),
        dateTimeReceived: faker.string.uuid(),
        dateTimeValidated: faker.string.uuid(),
        totalExcludingTax: faker.number.int(),
        totalDiscount: faker.number.int(),
        totalNetAmount: faker.number.int(),
        totalPayableAmount: faker.number.int(),
        status: faker.string.uuid(),
        cancelDateTime: faker.string.uuid(),
        rejectRequestDateTime: faker.string.uuid(),
        documentStatusReason: faker.string.uuid(),
        createdByUserId: faker.string.uuid(),
        document: faker.string.uuid(),
    }
});

export const getDocumentDetailRequestBuilder = build<GetDocumentDetailRequest>({
    fields: {
        uuid: faker.string.uuid(),
    }
});

export const validationStepResultBuilder = build<ValidationStepResult>({
    fields: {
        name: faker.string.uuid(),
        status: faker.string.uuid(),
        error: standardErrorResponseBuilder.one(),
    }
});

export const documentValidationResultsBuilder = build<DocumentValidationResults>({
    fields: {
        status: faker.string.uuid(),
        validationSteps: validationStepResultBuilder.many(5),
    }
});

export const documentDetailsBuilder = build<DocumentDetails>({
    fields: {
        uuid: faker.string.uuid(),
        submissionUid: faker.string.uuid(),
        longId: faker.string.uuid(),
        internalId: faker.string.uuid(),
        typeName: faker.string.uuid(),
        typeVersionName: faker.string.uuid(),
        issuerTin: faker.string.uuid(),
        issuerName: faker.string.uuid(),
        receiverId: faker.string.uuid(),
        receiverName: faker.string.uuid(),
        dateTimeIssued: faker.string.uuid(),
        dateTimeReceived: faker.string.uuid(),
        dateTimeValidated: faker.string.uuid(),
        totalExcludingTax: faker.number.int(),
        totalDiscount: faker.number.int(),
        totalNetAmount: faker.number.int(),
        totalPayableAmount: faker.number.int(),
        status: faker.string.uuid(),
        cancelDateTime: faker.string.uuid(),
        rejectRequestDateTime: faker.string.uuid(),
        documentStatusReason: faker.string.uuid(),
        createdByUserId: faker.string.uuid(),
        validationResults: documentValidationResultsBuilder.one(),
    }
})