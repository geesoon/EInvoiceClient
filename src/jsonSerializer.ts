import { ClassConstructor, instanceToPlain, plainToInstance } from "class-transformer";
import qs from "qs";

class JsonSerializer {
    public static serialize<T>(data: T): string {
        return qs.stringify(instanceToPlain<T>(data));
    }

    public static deserialize<T>(data: any, dtoClass: ClassConstructor<T>): T {
        return plainToInstance(dtoClass, data);
    }
}

export default JsonSerializer;