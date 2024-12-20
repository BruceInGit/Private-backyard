function deepClone(value, map = new WeakMap()) {
    if (value === null || value === undefined || typeof value !== "object") {
        return value;
    }

    if (map.has(value)) {
        return map.get(value);
    }

    if (value instanceof Date) {
        return new Date(value);
    }

    if (value instanceof RegExp) {
        return new RegExp(value);
    }

    if (value instanceof Map) {
        const newMap = new Map();
        map.set(value, newMap);
        value.forEach((val, key) => {
            newMap.set(deepClone(key, map), deepClone(val, map));
        });
        return newMap;
    }

    if (value instanceof Set) {
        const newSet = new Set();
        map.set(value, newSet);
        value.forEach((val) => {
            newSet.add(deepClone(val, map));
        });
        return newSet;
    }

    if (value instanceof WeakMap) {
        const newWeakMap = new WeakMap();
        map.set(value, newWeakMap);
        value.forEach((val, key) => {
            newWeakMap.set(deepClone(key, map), deepClone(val, map));
        });
        return newWeakMap;
    }

    if (value instanceof WeakSet) {
        const newWeakSet = new WeakSet();
        map.set(value, newWeakSet);
        value.forEach((val) => {
            newWeakSet.add(deepClone(val, map));
        });
        return newWeakSet;
    }

    if (typeof value === "function") {
        const fnCopy = function (...args) {
            return value.apply(this, args);
        };
  
        fnCopy.name = value.name;
        return fnCopy;
    }

    if (Array.isArray(value)) {
        const newArr = [];
        map.set(value, newArr);
        for (let i = 0; i < value.length; i++) {
            newArr[i] = deepClone(value[i], map);
        }
        return newArr;
    }

    const newObj = {};
    map.set(value, newObj);
    Object.keys(value).forEach((key) => {
        newObj[key] = deepClone(value[key], map);
    });

    return newObj;
}
