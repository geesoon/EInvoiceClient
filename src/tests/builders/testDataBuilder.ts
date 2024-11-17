import DeliveryAttempt from "@/core/models/deliveryAttempt";
import DocumentType from "@/core/models/documentType";
import DocumentTypeResponse from "@/core/models/documentTypeResponse";
import DocumentTypeVersion from "@/core/models/documentTypeVersion";
import DocumentTypeVersionStatus from "@/core/models/documentTypeVersionStatus";
import GetNotificationRequest from "@/core/models/getNotificationRequest";
import GetNotificationResponse from "@/core/models/getNotificationResponse";
import Language from "@/core/models/language";
import LoginRequest from "@/core/models/loginRequest";
import LoginResponse from "@/core/models/loginResponse";
import Metadata from "@/core/models/metadata";
import Notification from "@/core/models/notification";
import NotificationDeliveryStatus from "@/core/models/notificationDeliveryStatus";
import NotificationStatus from "@/core/models/notificationStatus";
import NotificationType from "@/core/models/notificationTypes";
import ValidateTinRequest from "@/core/models/validateTinRequest";
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
