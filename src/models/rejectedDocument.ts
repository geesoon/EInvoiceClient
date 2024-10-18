class RejectedDocument {
    public invoiceCodeNumber: string;
    public error: string;

    constructor(invoiceCodeNumber: string, error: string) {
        this.invoiceCodeNumber = invoiceCodeNumber;
        this.error = error;
    }
}

export default RejectedDocument;