import { Expose } from "class-transformer";
import EInvoiceType from "./codeTables/eInvoiceType";
import DocumentTypeVersionStatus from "./documentTypeVersionStatus";

class DocumentTypeVersionResponse {
    @Expose({ name: 'invoice_type_code' })
    invoiceTypeCode: EInvoiceType;

    @Expose({ name: 'name' })
    name: string;

    @Expose({ name: 'description' })
    description: string;

    @Expose({ name: 'version_number' })
    versionNumber: number;

    @Expose({ name: 'status' })
    status: DocumentTypeVersionStatus;

    @Expose({ name: 'active_from' })
    activeFrom: Date;

    @Expose({ name: 'active_to' })
    activeTo: Date;

    @Expose({ name: 'json_schema' })
    jsonSchema: string;

    @Expose({ name: 'xml_schema' })
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