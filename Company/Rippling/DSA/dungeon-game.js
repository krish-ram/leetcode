/* 
The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of m x n rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through dungeon to rescue the princess.
The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.
Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).
To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.
Return the knight's minimum initial health so that he can rescue the princess.
Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

Input: dungeon = [
    [-2, -3,  3],
    [-5, -10, 1],
    [10, 30, -5]
]

Output: 7
Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: 
RIGHT-> RIGHT -> DOWN -> DOWN.
*/

// Have a bottoms up approach. For each cell with value x, right cell of value h1 and left cell of value h2, 
// it will be max(1, (min(h1, h2) - x)));


function minHealth(dungeon) {
    let rows = dungeon.length;
    let cols = dungeon[0].length;
    let solution = [];
    for(let i=0; i<rows; i++)
        solution[i] = [];

    //if last value is negative, then previous value should be atleast 1 more than the 
    //last value since diff shouldn't fall to 0
    solution[rows-1][cols-1] = dungeon[rows-1][cols-1] > 0 ? 1 : 1 - dungeon[rows-1][cols-1];

    // Now solve for last col (cols-1)
    for (let i=rows-2; i>=0; i--) {
        solution[i][cols-1] = Math.max(1, solution[i+1][cols-1]-dungeon[i][cols-1])
    }
    // Now solve for last row (rows-1)
    for (let i=cols-2; i>=0; i--) {
        solution[rows-1][i] = Math.max(1, solution[rows-1][i+1]-dungeon[rows-1][i]);
    }

    // rest of the cell with value x, right cell of value h1 and left cell of value h2, 
    // it will be max(1, (min(h1, h2) - x)));
    for (let i=rows-2; i>=0; i--) {
        for (let j=cols-2; j>=0; j--) {
            solution[i][j] = Math.max(1, Math.min(solution[i+1][j], solution[i][j+1]) - dungeon[i][j]);
        }
    }
    console.log(solution)
    return solution[0][0];
}

let dungeon = [
    [-2, -3,  3],
    [-5, -10, 1],
    [10, 30, -5]
];
console.log(minHealth(dungeon));