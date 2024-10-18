import ValidationStepResult from "./validationStepResult";

class DocumentValidationResults {
    public status: string;
    public validationSteps: ValidationStepResult[];

    constructor(status: string, validationSteps: ValidationStepResult[]) {
        this.status = status;
        this.validationSteps = validationSteps;
    }
}

export default DocumentValidationResults;