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

    constructor(
        uuid: string,
        submissionUid: string,
        longId: string,
        internalId: string,
        typeName: string,
        typeVersionName: string,
        issuerTin: string,
        issuerName: string,
        receiverId: string | undefined,
        receiverName: string | undefined,
        dateTimeIssued: string,
        dateTimeReceived: string,
        dateTimeValidated: string,
        totalExcludingTax: number,
        totalDiscount: number,
        totalNetAmount: number,
        totalPayableAmount: number,
        status: string,
        documentStatusReason: string,
        createdByUserId: string,
        validationResults: DocumentValidationResults,
        cancelDateTime?: string,
        rejectRequestDateTime?: string
    ) {
        this.uuid = uuid;
        this.submissionUid = submissionUid;
        this.longId = longId;
        this.internalId = internalId;
        this.typeName = typeName;
        this.typeVersionName = typeVersionName;
        this.issuerTin = issuerTin;
        this.issuerName = issuerName;
        this.receiverId = receiverId;
        this.receiverName = receiverName;
        this.dateTimeIssued = dateTimeIssued;
        this.dateTimeReceived = dateTimeReceived;
        this.dateTimeValidated = dateTimeValidated;
        this.totalExcludingTax = totalExcludingTax;
        this.totalDiscount = totalDiscount;
        this.totalNetAmount = totalNetAmount;
        this.totalPayableAmount = totalPayableAmount;
        this.status = status;
        this.documentStatusReason = documentStatusReason;
        this.createdByUserId = createdByUserId;
        this.validationResults = validationResults;
        this.cancelDateTime = cancelDateTime;
        this.rejectRequestDateTime = rejectRequestDateTime;
    }
}

export default DocumentDetails;