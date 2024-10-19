import AcceptedDocument from "./acceptedDocument";
import RejectedDocument from "./rejectedDocument";

class SubmitDocumentResponse {
    public submissionUID: string;
    public acceptedDocuments: AcceptedDocument[];
    public rejectedDocuments: RejectedDocument[];

    constructor(
        submissionUID: string,
        acceptedDocuments: AcceptedDocument[],
        rejectedDocuments: RejectedDocument[]
    ) {
        this.submissionUID = submissionUID;
        this.acceptedDocuments = acceptedDocuments;
        this.rejectedDocuments = rejectedDocuments;
    }
}

export default SubmitDocumentResponse;