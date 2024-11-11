/*
You are given a matrix grid where grid[i] is either a 0 (representing water) or 1 (representing land).
An island is defined as a group of 1's connected horizontally or vertically. 
You may assume all four edges of the grid are surrounded by water.
The area of an island is defined as the number of cells within the island.
Return the maximum area of an island in grid. If no island exists, return 0.

Example 1: Input: grid = [
  [0,1,1,0,1],
  [1,0,1,0,1],
  [0,1,1,0,1],
  [0,1,0,0,1]
]

Output: 6
Explanation: 1's cannot be connected diagonally, so the maximum area of the island is 6.
*/

function maxAreaOfIsland(grid) {
    let rows = grid.length, cols = grid[0].length;
    let visit = {};

    function dfsHelper(r, c) {
        // check if row or col index within range, cell value is 1 and is not visited
        if (r < 0 || r >= rows || c < 0 || c >= cols ||
        grid[r][c] === 0 || visit[[r,c]]) {
            return 0;
        }
        // mark the cell as visited
        visit[[r,c]] = true;
        return (1 + dfsHelper(r+1, c) + 
                    dfsHelper(r-1, c) +
                    dfsHelper(r, c+1) +
                    dfsHelper(r, c-1))
    }

    let area = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            area = Math.max(area, dfsHelper(i, j));
        }
    }
    return area;
}