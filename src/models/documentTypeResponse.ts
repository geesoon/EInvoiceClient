import DocumentTypeVersion from "./documentTypeVersion";
import WorkFlowParameter from "./workflowParameter";

class DocumentTypeResponse {
    id: number;
    invoiceTypeCode: number;
    description: string;
    activeFrom: Date;
    activeTo: Date;
    documentTypeVersions: DocumentTypeVersion[];
    workflowParameter: WorkFlowParameter[];

    constructor(id: number, invoiceTypeCode: number, description: string, activeFrom: Date, activeTo: Date, documentTypeVersions: DocumentTypeVersion[], workflowParameters: WorkFlowParameter[]) {
        this.id = id;
        this.invoiceTypeCode = invoiceTypeCode;
        this.description = description;
        this.activeFrom = activeFrom;
        this.activeTo = activeTo;
        this.documentTypeVersions = documentTypeVersions;
        this.workflowParameter = workflowParameters;
    }
}

export default DocumentTypeResponse;