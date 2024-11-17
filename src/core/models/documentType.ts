import { Expose } from "class-transformer";
import DocumentTypeVersion from "./documentTypeVersion";
import WorkFlowParameter from "./workflowParameter";

class DocumentType {
    @Expose({ name: 'id' })
    id: number;

    @Expose({ name: 'invoice_type_code' })
    invoiceTypeCode: number;

    @Expose({ name: 'description' })
    description: string;

    @Expose({ name: 'active_from' })
    activeFrom: Date;

    @Expose({ name: 'active_to' })
    activeTo: Date;

    @Expose({ name: 'document_type_versions' })
    documentTypeVersions?: DocumentTypeVersion[];

    @Expose({ name: 'work_flow_parameter' })
    workflowParameter: WorkFlowParameter[];
}

export default DocumentType;