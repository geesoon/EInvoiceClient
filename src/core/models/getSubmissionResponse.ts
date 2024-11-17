import DocumentSummary from "./documentSummary";

class GetSubmissionResponse {
    public submissionUid: string;
    public documentCount: number;
    public dateTimeReceived: Date;
    public overallStatus: string;
    public documentSummary: DocumentSummary[];
}

export default GetSubmissionResponse;