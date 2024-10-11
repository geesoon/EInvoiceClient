import { Url } from "url";

class BadRequestResponse {
    error: string;
    errorDescription: string;
    errorUri: Url

    constructor(error: string, errorDescription: string, errorUri: Url) {
        this.error = error;
        this.errorDescription = errorDescription;
        this.errorUri = errorUri;
    }
}

export default BadRequestResponse;