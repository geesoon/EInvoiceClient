import PaymentMethod from "@/models/codeTables/paymentMethod";

const PaymentMethods: PaymentMethod[] = [
    {
        "code": "01",
        "method": "Cash"
    },
    {
        "code": "02",
        "method": "Cheque"
    },
    {
        "code": "03",
        "method": "Bank Transfer"
    },
    {
        "code": "04",
        "method": "Credit Card"
    },
    {
        "code": "05",
        "method": "Debit Card"
    },
    {
        "code": "06",
        "method": "e-Wallet / Digital Wallet"
    },
    {
        "code": "07",
        "method": "Digital Bank"
    },
    {
        "code": "08",
        "method": "Others"
    }
];

export default PaymentMethods;