/* 
You are given a m×n 2D grid initialized with these three possible values:

1. -1 - A water cell that can not be traversed.
2. 0 - A treasure chest.
3. INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.

Fill each land cell with the distance to its nearest treasure chest. 
If a land cell cannot reach a treasure chest than the value should remain INF.
Assume the grid can only be traversed up, down, left, or right.

Example 1:
Input: [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]
Output: [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]

Example 2:
Input: [
  [0,-1],
  [2147483647,2147483647]
]
Output: [
  [0,-1],
  [1,2]
]

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
grid[i][j] is one of {-1, 0, 2147483647}

*/

function islandsAndTreasure(grid) {
    let rows = grid.length, cols = grid[0].length;
    let visited = {};
    let queue = [];

    function addRoom(r, c) {
        if (r< 0 || r >= rows || c < 0 || c >= cols || grid[r][c]===-1 || visited[[r,c]])
            return;
        visited[[r, c]] = true;
        queue.push([r, c]);
    }

    for (let i = 0 ; i < rows; i++) {
        for (let j = 0 ; j < cols; j++) {
            if (grid[i][j] === 0) {
                queue.push([i, j]);
                visited[[i, j]] = true;
            }
        }
    }

    let dist = 0;
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const [r, c] = queue.shift();
            grid[r][c] = dist;
            addRoom(r+1, c);
            addRoom(r-1, c);
            addRoom(r, c+1);
            addRoom(r, c-1);
        }
        dist += 1;
    }
    return grid;
}

let input = [
    [3,-1,0,1],
    [2,2,1,-1],
    [1,-1,2,-1],
    [0,-1,3,4]
  ];

console.log(islandsAndTreasure(input));