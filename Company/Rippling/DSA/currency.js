// Question Paramenters: array of currency conversion rates. E.g. ['USD', 'GBP', 0.77] which means 1 USD is equal to 0.77 GBP an array containing a 'from' currency and a 'to' currency Given the above parameters, find the conversion rate that maps to the 'from' currency to the 'to' currency. Your return value should be a number. Example: You are given the following parameters: Rates: ['USD', 'JPY', 110] ['US', 'AUD', 1.45] ['JPY', 'GBP', 0.0070] To/From currency ['GBP', 'AUD'] Find the rate for the 'To/From' curency. In this case, the correct result is 1.89.
// https://leetcode.com/problems/evaluate-division/description/


function currencyConversion(rates, queries) {
    let adjacencyList = {};

    for (const [from, to, rate] of rates) {
        if (!(from in adjacencyList))
            adjacencyList[from] = [];

        if (!(to in adjacencyList))
            adjacencyList[to] = [];

        adjacencyList[from].push([to, rate]);
        adjacencyList[to].push([from, 1/rate]);
    }
    console.log(adjacencyList);

    let minRate = Infinity;
    
    let outputQueries = [];

    for (let [from_currency, to_currency] of queries) {
        let visited = {};
        let queue = [[from_currency, 1]];
        visited[from_currency] = true;
        let found = false;
        while (queue.length) {
            const [currNode, currMultiplier] = queue.pop(0);

            if (currNode === to_currency) {
                minRate = Math.min(minRate, currMultiplier);
                outputQueries.push(currMultiplier);
                found = true;
                break;
            }
            
            for (const [neighbour, rate] of adjacencyList[currNode]) {
                if (!(neighbour in visited)) {
                    visited[neighbour] = true;
                    queue.push([neighbour, currMultiplier*rate]);
                }
            }
        }
        if (!found)
            outputQueries.push(-1);
    }
    return outputQueries;
}

let rates = [['USD', 'JPY', 100], ['JPY', 'CHN', 20], ['CHN', 'THAI', 200], ['JPY', 'USD', 0.01]]
let queries = [['USD', 'CHN'], ['JPY', 'THAI'],['USD', 'AUD']];
console.log(currencyConversion(rates, queries));