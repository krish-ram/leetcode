const promiseAllSettled = (tasks) => {

    let result = tasks.map(promise => 
        promise.then(
            (val) => {status: 'fulfilled', value: val},
            (err) => {status: 'rejected', reason: err}
        )
    );
    return Promise.all(result);
}