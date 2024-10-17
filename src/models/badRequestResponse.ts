import { Expose } from "class-transformer";

class BadRequestResponse {
    @Expose({ name: 'error' })
    error: string;

    @Expose({ name: 'error-description' })
    errorDescription: string;

    @Expose({ name: 'error-uri' })
    errorUri: URL

    constructor(error: string, errorDescription: string, errorUri: URL) {
        this.error = error;
        this.errorDescription = errorDescription;
        this.errorUri = errorUri;
    }
}

export default BadRequestResponse;