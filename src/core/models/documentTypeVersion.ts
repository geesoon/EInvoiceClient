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
}

export default DocumentTypeVersion;