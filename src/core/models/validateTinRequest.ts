class ValidateTinRequest {
    public tin: string;
    public idType: string;
    public idValue: string;

    constructor(tin: string, idType: string, idValue: string) {
        this.tin = tin;
        this.idType = idType;
        this.idValue = idValue;
    }
}

export default ValidateTinRequest;