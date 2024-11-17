import DocumentValidationResults from "./documentValidationResults";

class DocumentDetails {
    public uuid: string;
    public submissionUid: string;
    public longId: string;
    public internalId: string;
    public typeName: string;
    public typeVersionName: string;
    public issuerTin: string;
    public issuerName: string;
    public receiverId?: string; // Optional property
    public receiverName?: string; // Optional property
    public dateTimeIssued: string; // ISO 8601 DateTime format
    public dateTimeReceived: string; // ISO 8601 DateTime format
    public dateTimeValidated: string; // ISO 8601 DateTime format
    public totalExcludingTax: number; // Decimal
    public totalDiscount: number; // Decimal
    public totalNetAmount: number; // Decimal
    public totalPayableAmount: number; // Decimal
    public status: string;
    public cancelDateTime?: string; // Optional property
    public rejectRequestDateTime?: string; // Optional property
    public documentStatusReason: string;
    public createdByUserId: string;
    public validationResults: DocumentValidationResults; // Object structure for validation results
}

export default DocumentDetails;