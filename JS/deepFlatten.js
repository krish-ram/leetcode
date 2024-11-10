
/*
    Input: {
        A: "12",
        B: 23,
        C: {
            P: 23, 
            O: {
                L: 56
            },
            Q: [1, 2] 
        }
    }

    Output: {
    "A": "12"
    "B": 23,
    "C.O.L": 56,
    "C.P": 23,
    "C.Q.0": 1,
    "C.Q.1": 2,
    }
*/
const deepFlatten = (obj, prefix) => {
    let result = {};
    for (const key of obj) {
        const item = obj[key];
        const newKey = prefix ? prefix+"."+k : k;
        if (typeof(val) === 'object') {
            if (Array.isArray(val)) {
                const {...arrToObj} = val;
                const newObj = deepFlatten(arrToObj, newKey);
                result = {...result, ...newObj};
            
            } else {
                const newObj = deepFlatten(val, newKey);
                result = {...result, ...newObj};
            }
        } else {
            result = {...result, [newKey]: val};
        }
    }
    return result;
}