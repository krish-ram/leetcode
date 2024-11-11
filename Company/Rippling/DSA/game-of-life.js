/* 
The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Example 1:
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
*/

function countNeighbors(board, r, c) {
    let directions = [[0, 1], [1, 0], [1,1], [0, -1], [-1, 0], [-1, -1], [1, -1], [-1, 1]];
    let count = 0;
    for(const [row, col] of directions) {
        let cr = r + row;
        let cc = c + col;

        if (cr >= 0 && cr < board.length && cc >= 0 && cc < board[0].length && (board[cr][cc] === 1 || board[cr][cc] === -1)) {
            count++;
        }
    }
    return count;
}

// Solution 1
// T - O(m*n) S - O(m*n)
function gameOfLife(board) {
    let r = board.length;
    let c = board[0].length;
    const newBoard = Array.from({length: board.length}, () => new Array(board[0].length).fill(0));

    for (let i=0; i<r; i++) {
        for(let j=0; j<c; j++) {

            let neighbors = countNeighbors(board , i, j);

            if (board[i][j] === 1) {
                if (neighbors < 2 || neighbors > 3) {
                    newBoard[i][j] = 0;
                } else {
                    newBoard[i][j] = 1;
                } 
            } else {
                if (neighbors === 3)
                newBoard[i][j] = 1;
            }
        }
    }
    return newBoard;

}

// Solution 2
// T - O(m*n) S - O(1)
function gameOfLife2(board) {
    let r = board.length;
    let c = board[0].length;

    for (let i=0; i<r; i++) {
        for(let j=0; j<c; j++) {

            let neighbors = countNeighbors(board , i, j);

            if (board[i][j] === 1) {
                if (neighbors < 2 || neighbors > 3) {
                    board[i][j] = -1;
                }
            } else {
                if (neighbors === 3)
                    board[i][j] = 2;
            }
        }
    }
    for (let i=0; i<r; i++) {
        for(let j=0; j<c; j++) {
            if (board[i][j] === -1)
                board[i][j] = 0;
            if (board[i][j] === 2)
                board[i][j] = 1;
        }
    }
    return board;

}


let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
console.log(gameOfLife(board));
