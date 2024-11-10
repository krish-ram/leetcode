//Implement a function in JavaScript that retries promises N number of times with a delay between each call.

const wait = (delay) ={
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delay);
    })
}

const retryWithDelay = async(fn, retry, delay, finalErr = "Retry failed") => {
    try {
        await fn();
    } catch (error) {
        if (retry <= 0) {
            return Promise.reject(finalErr);
        }
        await wait(delay);

        return retryWithDelay(fn, retry-1, delay, finalErr);
    }
}