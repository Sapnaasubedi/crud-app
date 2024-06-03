import { test ,isEmpty as IsEmpty,type} from "ramda";
export const hexRegex = /^[0-9a-fA-F]{24}$/;

export const isMongoId = test(hexRegex);

export const isEmpty = <T>(data: T): boolean =>
    type(data) === `Undefined` || type(data) === `Null` || IsEmpty(data);