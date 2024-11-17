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
}

export default RecentDocumentResult;