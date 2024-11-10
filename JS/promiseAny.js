const promiseAny = (tasks) => {
    const errorResult = [];
    const failed = 0;

    return new Promise((resolve, reject) => {
        tasks.forEach(promise => {
            Promise.resolve(promise).then(resolve))
            .catch((error) => {
                errorResult[failed] = error;
                failed++;
                if(failed === tasks.length) {
                    reject(errorResult);
                }
            });
        });
    });
}