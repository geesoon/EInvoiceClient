class WorkFlowParameter {
    id: number;
    parameter: string;
    value: number;
    activeFrom: Date;
    activeTo: Date;

    constructor(id: number, parameter: string, value: number, activeFrom: Date, activeTo: Date) {
        this.id = id;
        this.parameter = parameter;
        this.value = value;
        this.activeFrom = activeFrom;
        this.activeTo = activeTo;
    }
}

export default WorkFlowParameter;