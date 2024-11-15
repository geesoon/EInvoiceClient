class StandardErrorResponse {
    public propertyName: string;
    public propertyPath: string;
    public errorCode: string;
    public error: string;
    public errorMS: string;
    public target: string;
    public innerError: StandardErrorResponse[];

    constructor(
        propertyName: string,
        propertyPath: string,
        errorCode: string,
        error: string,
        errorMS: string,
        target: string,
        innerError: StandardErrorResponse[]
    ) {
        this.propertyName = propertyName;
        this.propertyPath = propertyPath;
        this.errorCode = errorCode;
        this.error = error;
        this.errorMS = errorMS;
        this.target = target;
        this.innerError = innerError;
    }
}

export default StandardErrorResponse;