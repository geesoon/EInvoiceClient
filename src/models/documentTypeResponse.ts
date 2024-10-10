class DocumentTypeResponse {
    id: number;
    invoiceTypeCode: number;
    description: string;
    activeFrom: Date;
    activeTo: Date;
    documentTypeVersions: DocumentTypeVersion[];

    constructor(id: number, invoiceTypeCode: number, description: string, activeFrom: Date, activeTo: Date, documentTypeVersions: DocumentTypeVersion[]) {
        this.id = id;
        this.invoiceTypeCode = invoiceTypeCode;
        this.description = description;
        this.activeFrom = activeFrom;
        this.activeTo = activeTo;
        this.documentTypeVersions = documentTypeVersions;
    }
}