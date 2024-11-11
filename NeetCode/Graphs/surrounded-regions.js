/*
    You are given a 2-D matrix board containing 'X' and 'O' characters.
    If a continous, four-directionally connected group of 'O's is surrounded by 'X's, it is considered to be surrounded.
    Change all surrounded regions of 'O's to 'X's and do so in-place by modifying the input board.

    Example 1:
    Input: board = [
        ["X","X","X","X"],
        ["X","O","O","X"],
        ["X","O","O","X"],
        ["X","X","X","O"]
    ]

    Output: [
        ["X","X","X","X"],
        ["X","X","X","X"],
        ["X","X","X","X"],
        ["X","X","X","O"]
    ]
    Explanation: Note that regions that are on the border are not considered surrounded regions.
*/

function surroundedRegions(board) {
    let rows = board.length, cols = board[0].length;
    let visited = {};

    function dfsHelper(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || visited[[r,c]] || board[r][c]==='X') 
            return;
        visited[[r,c]] = true;
        board[r][c] = 'Y';
        dfsHelper(r+1, c);
        dfsHelper(r-1, c);
        dfsHelper(r, c+1);
        dfsHelper(r, c-1);
    }

    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            if (i===0 || j===0 || i===rows-1 || j === cols-1) {
                console.log(i, j)
                dfsHelper(i, j);
            }
        }
    }

    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
            if (board[i][j] === 'Y') {
                board[i][j] = 'O';
            }
        }
    }

    return board;
}

const input = [["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]]
console.log(surroundedRegions(input));