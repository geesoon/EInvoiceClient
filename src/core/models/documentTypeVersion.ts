import { Expose } from "class-transformer";
import DocumentTypeVersionStatus from "./documentTypeVersionStatus";

class DocumentTypeVersion {
    @Expose({ name: 'number' })
    public id: number;

    @Expose({ name: 'name' })
    public name: string;

    @Expose({ name: 'description' })
    public description: string;

    @Expose({ name: 'active_from' })
    public activeFrom: Date;

    @Expose({ name: 'active_to' })
    public activeTo: Date;

    @Expose({ name: 'version_number' })
    public versionNumber: number;

    @Expose({ name: 'status' })
    public status: DocumentTypeVersionStatus;

    constructor(id: number, name: string, description: string, activeFrom: Date, activeTo: Date, versionNumber: number, status: DocumentTypeVersionStatus) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.activeFrom = activeFrom;
        this.activeTo = activeTo;
        this.versionNumber = versionNumber;
        this.status = status;
    }
}

export default DocumentTypeVersion;