import { Expose } from "class-transformer";
import { Url } from "url";

class BadRequestResponse {
    @Expose()
    error: string;

    @Expose({ name: 'error-description' })
    errorDescription: string;

    @Expose({ name: 'error-uri' })
    errorUri: Url

    constructor(error: string, errorDescription: string, errorUri: Url) {
        this.error = error;
        this.errorDescription = errorDescription;
        this.errorUri = errorUri;
    }
}

export default BadRequestResponse;