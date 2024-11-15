class ApiError extends Error {
    public statusCode: number;
    public responseData: any;

    constructor(message: string, statusCode: number, responseData: any) {
        super(message);
        this.statusCode = statusCode;
        this.responseData = responseData;
        this.name = "ApiError";
    }
}

export default ApiError;