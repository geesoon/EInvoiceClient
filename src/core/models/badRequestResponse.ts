import { Expose } from "class-transformer";

class BadRequestResponse {
    @Expose({ name: 'error' })
    error: string;

    @Expose({ name: 'error-description' })
    errorDescription: string;

    @Expose({ name: 'error-uri' })
    errorUri: URL
}

export default BadRequestResponse;