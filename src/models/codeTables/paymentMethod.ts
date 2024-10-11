class PaymentMethod {
    code: string;
    method: string;

    constructor(code: string, method: string) {
        this.code = code;
        this.method = method;
    }
}

export default PaymentMethod;