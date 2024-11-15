import DocumentSummary from "./documentSummary";

class GetSubmissionResponse {
    public submissionUid: string;
    public documentCount: number;
    public dateTimeReceived: Date;
    public overallStatus: string;
    public documentSummary: DocumentSummary[];

    constructor(
        submissionUid: string,
        documentCount: number,
        dateTimeReceived: Date,
        overallStatus: string,
        documentSummary: DocumentSummary[]
    ) {
        this.submissionUid = submissionUid;
        this.documentCount = documentCount;
        this.dateTimeReceived = dateTimeReceived;
        this.overallStatus = overallStatus;
        this.documentSummary = documentSummary;
    }
}

export default GetSubmissionResponse;