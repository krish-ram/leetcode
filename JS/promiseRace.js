const promiseRace = (promiseArray) => {
    return new Promise((resolve, reject) => {
        promiseArray.forEach(promise => {
            Promise.resolve(promise)
            .then(resolve, reject)
            .catch(reject);
        });
    });
}

// Another version
const promiseRace = (promiseArray) => {
    return new Promise((resolve, reject) => {
        promiseArray.forEach(promise => {
            promise
            .then(resolve, reject)
            .catch(reject);
        });
    });
}

