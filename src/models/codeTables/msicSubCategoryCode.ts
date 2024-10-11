class MSICSubCategoryCode {
    code: string;
    description: string;
    categoryReference: string;

    constructor(code: string, description: string, categoryReference: string) {
        this.code = code;
        this.description = description;
        this.categoryReference = categoryReference;
    }
}

export default MSICSubCategoryCode;