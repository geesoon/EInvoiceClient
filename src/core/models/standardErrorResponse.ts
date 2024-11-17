class StandardErrorResponse {
    public propertyName: string;
    public propertyPath: string;
    public errorCode: string;
    public error: string;
    public errorMS: string;
    public target: string;
    public innerError: StandardErrorResponse[];
}

export default StandardErrorResponse;