import { faker } from '@faker-js/faker';

type Constructor<T> = new (...args: any[]) => T;

export class Builder<T> {
    private instance: Partial<T> = {};

    constructor(private readonly ctor: Constructor<T>) { }

    with(properties: Partial<T>): this {
        Object.assign(this.instance, properties);
        return this;
    }

    withRandomData(): this {
        const keys = Object.keys(this.instance) as Array<keyof T>;
        keys.forEach((key) => {
            this.instance[key] = this.generateRandomValue(this.instance[key]);
        });
        return this;
    }

    private generateRandomValue(value: any): any {
        const type = typeof value;

        switch (type) {
            case 'number':
                return faker.number.int;
            case 'string':
                if (value instanceof Date) {
                    return faker.date.past(); // Example for date types
                }
                return faker.lorem.word(); // Default string value
            case 'boolean':
                return faker.datatype.boolean();
            // Add more cases as necessary for other types
            default:
                return null; // Handle unknown types appropriately
        }
    }

    build(): T {
        return new this.ctor(...Object.values(this.instance));
    }
}