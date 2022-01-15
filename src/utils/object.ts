import { isObject } from "./type";

// 合并两个对象
export const mergeObject = function (obj1: any, obj2: any) {
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1;
    }
    const res = { ...obj1 };
    for (let key in obj2) {
        if (obj2[key] !== undefined) {
            res[key] = obj2[key];
            if (obj1[key] === undefined) {
                res[key] = obj2[key];
            }
        }
    }
    return res;
};