/*  
    Create a toggle function that accepts a list of arguments
    and toggles each of them when invoked in a cycle.

    let hello = toggle("hello");
    hello() // "hello";
    hello() // "hello";
    
    let onOff = toggle("on", "off");
    onOff() // "on"
    onOff() // "off"
    onOff() // "on"
*/
const toggle = (...list) {
    let current = -1;
    const len = list.length;

    return function () {
        current = (current + 1) % len;
        return list[current];
    }
};