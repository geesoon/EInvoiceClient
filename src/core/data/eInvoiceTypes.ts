import EInvoiceType from "../models/codeTables/eInvoiceType";

const EInvoiceTypes: EInvoiceType[] = [
    {
        "code": "01",
        "description": "Invoice"
    },
    {
        "code": "02",
        "description": "Credit Note"
    },
    {
        "code": "03",
        "description": "Debit Note"
    },
    {
        "code": "04",
        "description": "Refund Note"
    },
    {
        "code": "11",
        "description": "Self-billed Invoice"
    },
    {
        "code": "12",
        "description": "Self-billed Credit Note"
    },
    {
        "code": "13",
        "description": "Self-billed Debit Note"
    },
    {
        "code": "14",
        "description": "Self-billed Refund Note"
    }
];

export default EInvoiceTypes;