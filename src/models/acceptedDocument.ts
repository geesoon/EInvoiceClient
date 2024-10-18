class AcceptedDocument {
    public uuid: string;
    public invoiceCodeNumber: string;

    constructor(uuid: string, invoiceCodeNumber: string) {
        this.uuid = uuid;
        this.invoiceCodeNumber = invoiceCodeNumber;
    }
}

export default AcceptedDocument;