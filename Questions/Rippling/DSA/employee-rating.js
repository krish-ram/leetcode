/*
Company xyz.com has an organizational structure such that each employee in the company can have at most one manager
and may have many subordinates. The company recently conducted their quarterly performance review cycle and each employee has received a performance rating.
An example structure is as follows:
     A(5)
B(3)     C(1)
      D(4)  E(10)
A is the manager of B and C
C is the manager of D and E
Performance ratings are mentioned in brackets
Now given the employee information of a company, return the employee whose team has the highest performance rating average.
A team is defined as a group consisting of an employee and all their subordinates (not just the direct ones).
Sample input/output:
Input format: [employee name, rating, List]
data = [['A', 5, ['B', 'C']], ['B', 3, []], ['C', 2, ['D', 'E']], ['D', 4, []], ['E', 10, []]
Output: E

Modified version of https://leetcode.com/problems/employee-importance/
*/
function employeeRating(employee, data) {
    let rating = employee[1];
    let subOrdinates = employee[2];
    let sum = rating;
    let count = 1;
    for (let subOrdinate of subOrdinates) {
        for(let i=0; i<data.length; i++) {
            if (subOrdinate === data[i][0]) {
                let result = employeeRating(data[i], data);
                sum += result[0];
                count += result[1];
            }
        }
    }
    return [sum, count];
}

function main(data) {
    let max = 0;
    let maxEmployee = "";

    for (let employee of data) {
        let result = employeeRating(employee, data);
        let average = result[0] / result[1];
        console.log(11, employee[0], result, average);
        if (average > max) {
            max = average;
            maxEmployee = employee[0];
        }
    }
    return [max, maxEmployee]
}


let data = [
    ["A", 5, ["B", "C"]],
    ["B", 3, []],
    ["C", 2, ["D", "E"]],
    ["D", 4, []],
    ["E", 10, []],
];

console.log(main(data));