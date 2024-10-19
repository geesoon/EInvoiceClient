export class SearchDocumentResult {
    public uuid: string;
    public submissionUID: string;
    public longId: string;
    public internalId: string;
    public typeName: string;
    public typeVersionName: string;
    public issuerTin: string;
    public issuerName: string;
    public receiverId?: string;
    public receiverName?: string;
    public dateTimeIssued: Date;
    public dateTimeReceived: Date;
    public dateTimeValidated: Date;
    public totalSales: number;
    public totalDiscount: number;
    public netAmount: number;
    public total: number;
    public status: string;
    public cancelDateTime?: Date;
    public rejectRequestDateTime?: Date;
    public documentStatusReason?: string;
    public createdByUserId: string;
    public supplierTIN: string;
    public supplierName: string;
    public submissionChannel: string;
    public intermediaryName: string;
    public intermediaryTIN: string;
    public buyerName: string;
    public buyerTIN: string;

    constructor(
        uuid: string,
        submissionUID: string,
        longId: string,
        internalId: string,
        typeName: string,
        typeVersionName: string,
        issuerTin: string,
        issuerName: string,
        dateTimeIssued: Date,
        dateTimeReceived: Date,
        dateTimeValidated: Date,
        totalSales: number,
        totalDiscount: number,
        netAmount: number,
        total: number,
        status: string,
        createdByUserId: string,
        supplierTIN: string,
        supplierName: string,
        submissionChannel: string,
        intermediaryName: string,
        intermediaryTIN: string,
        buyerName: string,
        buyerTIN: string,
        receiverId?: string,
        receiverName?: string,
        cancelDateTime?: Date,
        rejectRequestDateTime?: Date,
        documentStatusReason?: string
    ) {
        this.uuid = uuid;
        this.submissionUID = submissionUID;
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
        this.totalSales = totalSales;
        this.totalDiscount = totalDiscount;
        this.netAmount = netAmount;
        this.total = total;
        this.status = status;
        this.cancelDateTime = cancelDateTime;
        this.rejectRequestDateTime = rejectRequestDateTime;
        this.documentStatusReason = documentStatusReason;
        this.createdByUserId = createdByUserId;
        this.supplierTIN = supplierTIN;
        this.supplierName = supplierName;
        this.submissionChannel = submissionChannel;
        this.intermediaryName = intermediaryName;
        this.intermediaryTIN = intermediaryTIN;
        this.buyerName = buyerName;
        this.buyerTIN = buyerTIN;
    }
}

export default SearchDocumentResult;