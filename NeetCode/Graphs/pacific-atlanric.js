/*
You are given a rectangular island heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
The islands borders the Pacific Ocean from the top and left sides, and borders the Atlantic Ocean from the bottom and right sides.

Water can flow in four directions (up, down, left, or right) from a cell to a neighboring cell with height equal or lower.
Water can also flow into the ocean from cells adjacent to the ocean.

Find all cells where water can flow from that cell to both the Pacific and Atlantic oceans. 
Return it as a 2D list where each element is a list [r, c] representing the row and column of the cell.
You may return the answer in any order.

Example 1:
Input: heights = [
  [4,2,7,3,4],
  [7,4,6,4,7],
  [6,3,5,3,6]
]
Output: [[0,2],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4],[2,0]]

Example 2:
Input: heights = [[1],[1]]
Output: [[0,0],[0,1]]
*/

function pacificAtlantic(heights) {
    let rows = heights.length, cols = heights[0].length;
    let pac = {}, atl = {};

    function dfsHelper(r, c, visited, prevHeight) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[[r, c]] || heights[r][c] < prevHeight) {
            return;
        }
        visited[[r, c]] = true;
        dfsHelper(r+1, c, visited, heights[r][c]);
        dfsHelper(r-1, c, visited, heights[r][c]);
        dfsHelper(r, c+1, visited, heights[r][c]);
        dfsHelper(r, c-1, visited, heights[r][c]);
    }

    for (let i = 0; i < cols; i++) {
        dfsHelper(0, i, pac, heights[0][i]);
        dfsHelper(rows-1, i, atl, heights[rows-1][i]);
    }

    for (let i = 0; i < rows; i++) {
        dfsHelper(i, 0, pac, heights[i][0]);
        dfsHelper(i, cols-1, atl, heights[i][cols-1]);
    }

    let result = []
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if ([i, j] in pac && [i, j] in atl) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

const input = [
    [4,2,7,3,4],
    [7,4,6,4,7],
    [6,3,5,3,6]
  ];
console.log(pacificAtlantic(input));