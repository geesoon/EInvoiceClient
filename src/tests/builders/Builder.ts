import { faker } from '@faker-js/faker';

class Builder<T> {
    private instance: T;

    constructor(typeConstructor: new () => T) {
        this.instance = new typeConstructor();
    }

    public build(): T {
        return this.instance;
    }

    // Method to populate public properties with Faker.js data
    public populateWithFaker(): this {
        for (const key of Object.keys(this.instance)) {
            const propKey = key as keyof T;

            // Populate based on the property type
            if (typeof this.instance[propKey] === 'string') {
                this.instance[propKey] = faker.lorem.sentence();
            } else if (typeof this.instance[propKey] === 'number') {
                this.instance[propKey] = faker.datatype.number();
            } else if (this.instance[propKey] instanceof Date) {
                this.instance[propKey] = faker.date.past();
            }
        }
        return this;
    }

    // Method to populate a specific property with a custom value
    public withProperty<K extends keyof T>(key: K, value: T[K]): this {
        this.instance[key] = value;
        return this;
    }
}

export default Builder;