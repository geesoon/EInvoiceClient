import EInvoiceType from "./codeTables/invoiceType";

class DocumentTypeVersionResponse {
    invoiceTypeCode: EInvoiceType;
    name: string;
    description: string;
    versionNumber: number;
    status: DocumentTypeVersionStatus;
    activeFrom: Date;
    activeTo: Date;
    jsonSchema: string;
    xmlSchema: string;

    constructor(
        invoiceTypeCode: EInvoiceType,
        name: string,
        description: string,
        versionNumber: number,
        status: DocumentTypeVersionStatus,
        activeFrom: Date,
        activeTo: Date,
        jsonSchema: string,
        xmlSchema: string
    ) {
        this.invoiceTypeCode = invoiceTypeCode;
        this.name = name;
        this.description = description;
        this.versionNumber = versionNumber;
        this.status = status;
        this.activeFrom = activeFrom;
        this.activeTo = activeTo;
        this.jsonSchema = jsonSchema;
        this.xmlSchema = xmlSchema;
    }
}

export default DocumentTypeVersionResponse;