/*  
    Debouncing is a method or a way to execute a function 
    when it is made sure that no further repeated event 
    will be triggered in a given frame of time.

    Eg:  To trigger a search function, we want the user to 
    finish typing and then wait for a specified window of 
    time to see if the user is not going to type anything else
    or has finished typing then make the request and return the result.
*/
function debounce (fn, delay) {
    // variable to store the instance in closure
    let timer;

    //returns anonymous function
    return function(params) {
        let context = this;
        let args = arguments;

        // base case - clear timer to assign new timeout
        // when even is fired repeatedly
        clearTimeout(timer);

        //set new timout and call original function with apply
        timer = setTimeout(() => fn.apply(context, args), delay);
    }
}