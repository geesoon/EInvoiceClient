import axios from "axios";

class DocumentTypeEndpoint {
    private readonly baseURL: URL;
    private readonly relativePath: string;

    constructor(baseURL: URL, relativePath: string) {
        this.baseURL = baseURL;
        this.relativePath = relativePath;
    }

    public async getAsync() {
        return await axios.get(this.getFullUrl());
    }

    private getFullUrl(): string {
        return this.baseURL.toString() + this.relativePath;
    }
}