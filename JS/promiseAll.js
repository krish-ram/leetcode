const myPromiseAll = (tasks) => {
    let result = [];
    let completed = 0;
    return new Promise((resolve, reject) => {
        tasks.forEach((promise, index) => {
            promise.then((val) ={
                result[index] = val;
                completed++;
                if (completed === tasks.length) {
                    return resolve(result);
                }
            }).catch((error) => {
                return reject(error);
            });
        });
    });
}