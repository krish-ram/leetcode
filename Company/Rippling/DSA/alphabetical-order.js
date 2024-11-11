/* 
Given an array of words, find any alphabetical order in the English alphabet such that the given words can be considered sorted (increasing), if there exists such an order, otherwise output impossible. 

Examples:
Input :  words[] = {"zy", "ab"}
Output : zabcdefghijklmnopqrstuvwxy
Basically we need to make sure that 'z' comes
before 'a'.

Input :  words[] = {"geeks", "gamers", "coders", "everyoneelse"}
Output : zyxwvutsrqponmlkjihgceafdb

Input : words[] = {"marvel", "superman", "spiderman", "batman"}
Output : zyxwvuptrqonmsbdlkjihgfeca
*/


//////////////////////////////////////////

//UNFINISHED
/////////////////////////////////////////
const MAX_CHAR = 26;
function findOrder(words) {
    let n = words.length;
    if (n===1) {
        return 'abcdefghijklmnopqrstuvwxyz';
    }

    // create an array of 26 empty arrays
    let adj = Array(MAX_CHAR).fill(Array(0));

    //Array tracking the number of edges that are inward to each node
    let edgeInward = Array(MAX_CHAR).fill(0);

    let prev = words[0];
    for (let i = 1; i < n; ++i) {
        let curr = words[i];
        console.log(curr, adj, edgeInward)

        /* Find first such letter in the present string that is different
        from the letter in the previous string at the same index*/
        let j;
        for(j=0; j<Math.min(prev.length, curr.length); ++j) {
            if (prev[j] !== curr[j])
                break;
        }
        
        if (j < Math.min(prev.length, curr.length)) {
            /* The letter in the previous string precedes the one
            in the present string, hence add the letter in the present
            string as the child of the letter in the previous string*/
            adj[prev.charCodeAt(j) - 'a'.charCodeAt(0)].push(curr.charCodeAt(j) - 'a'.charCodeAt(0));

            /* The number of inward pointing edges to the node representing
            the letter in the present string increases by one*/
            edgeInward[curr.charCodeAt(j) - 'a'.charCodeAt(0)]++;
            prev = curr;
            continue;
        }

        if (prev.length > s.length) 
            return "impossible";

        prev = curr;
        console.log(111, adj)
    }
}

let input = ["geeks", "gamers", "coders", "everyoneelse"]
let output = findOrder(input);
const expectedOutput = 'zyxwvutsrqponmlkjihgceafdb';
console.log(output, output===expectedOutput);
