/*
    Throttling is a way/technique to restrict the number of function
    execution/call in the specified amount of time. Excessive function 
    invocations in applications hamper the performance drastically.

    Eg: If the user spam’s the click then this will make an API call on 
    each click. This is not what we want, we want to restrict the number
    of API calls that can be made. The other call will be made only 
    after a specified interval of time.
*/
function throttle(fn, delay) {
    let timer, lastRun;

    return function () {
        let context = this;
        let args = arguments;

        if (!lastRun) {
            fn.apply(context, args);
            lastRun = Date.now();
        } else {
            clearTimeout(timer);

            timer = setTimeout(() => {
                if ((Date.now() - lastRun) >= delay) {
                    fn.apply(context, args);
                    lastRun = Date.now();
                }
            }, delay-(Date.now() - lastRun));
        }
    }
}