class GetSubmissionRequest {
    public submissionUid: string;
    public pageNo: number;
    public pageSize: number;

    constructor(submissionUid: string, pageNo: number, pageSize: number) {
        this.submissionUid = submissionUid;
        this.pageNo = pageNo;
        this.pageSize = pageSize;
    }
}

export default GetSubmissionRequest;