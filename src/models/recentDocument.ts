class RecentDocumentResult {
    public uuid: string;
    public submissionUID: string;
    public longId: string;
    public internalId: string;
    public typeName: string;
    public typeVersionName: string;
    public issuerTin: string;
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
    public documentStatusReason: string;
    public createdByUserId: string;
    public supplierTin: string;
    public supplierName: string;
    public submissionChannel: string;
    public intermediaryName: string;
    public intermediaryTin: string;
    public buyerName: string;
    public buyerTin: string;

    constructor(
        uuid: string,
        submissionUID: string,
        longId: string,
        internalId: string,
        typeName: string,
        typeVersionName: string,
        issuerTin: string,
        receiverId: string | undefined,
        receiverName: string | undefined,
        dateTimeIssued: Date,
        dateTimeReceived: Date,
        dateTimeValidated: Date,
        totalSales: number,
        totalDiscount: number,
        netAmount: number,
        total: number,
        status: string,
        cancelDateTime: Date | undefined,
        rejectRequestDateTime: Date | undefined,
        documentStatusReason: string,
        createdByUserId: string,
        supplierTin: string,
        supplierName: string,
        submissionChannel: string,
        intermediaryName: string,
        intermediaryTin: string,
        buyerName: string,
        buyerTin: string
    ) {
        this.uuid = uuid;
        this.submissionUID = submissionUID;
        this.longId = longId;
        this.internalId = internalId;
        this.typeName = typeName;
        this.typeVersionName = typeVersionName;
        this.issuerTin = issuerTin;
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
        this.supplierTin = supplierTin;
        this.supplierName = supplierName;
        this.submissionChannel = submissionChannel;
        this.intermediaryName = intermediaryName;
        this.intermediaryTin = intermediaryTin;
        this.buyerName = buyerName;
        this.buyerTin = buyerTin;
    }
}

export default RecentDocumentResult;