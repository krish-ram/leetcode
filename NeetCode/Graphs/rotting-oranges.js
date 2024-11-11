/*
    You are given a 2-D matrix grid. Each cell can have one of three possible values:
    0 - an empty cell
    1 - a fresh fruit
    2 - a rotten fruit

    Every minute, if a fresh fruit is horizontally or vertically adjacent to a rotten fruit,
    then the fresh fruit also becomes rotten.

    Return the minimum number of minutes that must elapse until there are zero fresh fruits remaining. 
    If this state is impossible within the grid, return -1.

    Example 1:
    Input: grid = [[1,1,0],[0,1,1],[0,1,2]]
    Output: 4

    Example 2:
    Input: grid = [[1,0,1],[0,2,0],[1,0,1]]
    Output: -1

    Constraints:
    1 <= grid.length, grid[i].length <= 10
*/

function orangesRotting(grid) {
    let rows = grid.length, cols = grid[0].length;
    let queue = [], fresh = 0, mins = 0;

    function addOrange(r, c) {
        if (r<0|| r>=rows||c<0||c>=cols||grid[r][c]!==1)
            return;
        grid[r][c] = 2;
        queue.push([r,c]);
        fresh -= 1;
    }
    
    for (let i =0; i<rows; i++) {
        for (let j =0; j<cols; j++) {
            if (grid[i][j] === 1)
                fresh += 1;
            if (grid[i][j] === 2)
                queue.push([i, j]);
        }
    }

    while (queue.length && fresh > 0) {
        let len = queue.length;
        for (let i=0; i<len; i++) {
            const [r, c] = queue.shift();
            addOrange(r+1, c);
            addOrange(r-1, c);
            addOrange(r, c+1);
            addOrange(r, c-1);
        }
        mins += 1;
    }
    
    return fresh ? -1 : mins;
}

const input = [[1,1,0],[0,1,1],[0,1,2]];

console.log(orangesRotting(input));