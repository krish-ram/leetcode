const memoize = (fn) => {
    const cache = {};

    return function () {
        const key = JSON.stringify(arguments);
        if (cache[key]) {
            return cache[key];
        }
        const evaluatedValue = fn(...arguments);
        cache[key] = evaluatedValue;
        return evaluatedValue;
    }
}