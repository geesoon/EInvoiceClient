import AcceptedDocument from "./acceptedDocument";
import RejectedDocument from "./rejectedDocument";

class SubmitDocumentResponse {
    public submissionUID: string;
    public acceptedDocuments: AcceptedDocument[];
    public rejectedDocuments: RejectedDocument[];
}

export default SubmitDocumentResponse;