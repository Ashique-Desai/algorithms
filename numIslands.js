// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


// solve the problem with DFS (Depth first search) there is a more efficient and better way than this called union/find but first will solve it using DFS
/**
 * @param {character[][]} grid (grid is a Matrix or a 2D array)
 * @return {number}
 */
const numIslands = (matrix) => {
    // let visited = new Array(grid.length).fill(false).map(() => new Array(grid[0].length).fill(false));
    let totalIslands = 0;
    const row = matrix.length;
    const col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 1) {
                totalIslands++;
                visitIslandsDFS(matrix, i, j);
            }
        }
    }
    // console.log('totalIslands', totalIslands);
    return totalIslands;
};

const visitIslandsDFS = (matrix, x, y) => {
    if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) {
        return;
    }
    if (matrix[x][y] === 0) {
        return;
    }
    console.log('x', x, 'y', y)
    matrix[x][y] = 0; // mark the cell visited by making it a water cell
    // recursively visit all connected cells vertically and horizontally
    visitIslandsDFS(matrix, x + 1, y);  // lower cell, vertical
    visitIslandsDFS(matrix, x - 1, y);  // upper cell, vertical
    visitIslandsDFS(matrix, x, y + 1);  // right cell, horizontal
    visitIslandsDFS(matrix, x, y - 1);  // left cell, horizontal
}

// const matrix = [
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ]
const matrix = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
]
// Output: 3
console.log(numIslands(matrix));

// with BFS, breath first search
const numIslands2 = (matrix) => {
    // let visited = new Array(grid.length).fill(false).map(() => new Array(grid[0].length).fill(false));
    let totalIslands = 0;
    const row = matrix.length;
    const col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // console.log('i', i, 'j', j)
            if (matrix[i][j] === 1) {
                totalIslands++;
                visitIslandBFS(matrix, i, j);
            }
        }
    }
    // console.log('totalIslands', totalIslands);
    return totalIslands;
};

const visitIslandBFS = (matrix, x, y) => {
    const neighbors = [[x, y]];
    while (neighbors.length > 0) {
        // console.log('neighbors', neighbors)

        const cell = neighbors.shift();
        // console.log('neighbors.shift(), cell', cell)
        const row = cell[0];
        // console.log('row, cell[0]', cell[0])
        const col = cell[1];
        // console.log('col, cell[1]', cell[1])

        if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
            continue; // continue, if it is not a valid cell
        if (matrix[row][col] == 0)
            continue; // continue if it is a water cell

        console.log('row', row, 'col', col)

        matrix[row][col] = 0; // mark the cell visited by making it a water cell

        // insert all neighboring cells to the queue for BFS
        neighbors.push([row + 1, col]); // lower cell
        neighbors.push([row - 1, col]); // upper cell
        neighbors.push([row, col + 1]); // right cell
        neighbors.push([row, col - 1]); // left cell       
    }
}

const matrix2 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];

console.log(numIslands2(matrix2));
