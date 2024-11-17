import StandardErrorResponse from "./standardErrorResponse";

class ValidationStepResult {
    public name: string;
    public status: string;
    public error?: StandardErrorResponse; // Optional error response if status is Invalid
}

export default ValidationStepResult;