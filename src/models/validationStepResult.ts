import StandardErrorResponse from "./standardErrorResponse";

class ValidationStepResult {
    public name: string;
    public status: string;
    public error?: StandardErrorResponse; // Optional error response if status is Invalid

    constructor(name: string, status: string, error?: StandardErrorResponse) {
        this.name = name;
        this.status = status;
        this.error = error;
    }
}

export default ValidationStepResult;