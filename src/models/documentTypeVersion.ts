class DocumentTypeVersion {
    id: number;
    name: string;
    description: string;
    activeFrom: Date;
    activeTo: Date;
    versionNumber: number;
    status: DocumentTypeVersionStatus;

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