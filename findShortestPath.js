// BFS/Dijkstra algorithm, a version i used for the path finding app i created for CMAI

const matrix = [
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
];

const start = [2, 0];
const end = [2, 4];

// expected path = [[2,1], [2,2], [2,3]] 

const findShortestPath = (matrix, start, end) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const queue = [[...start, []]]; // initialize queue with the start cell and empty path array
    // directions to traverse
    const directions = [
        [0, 1], [1, 0], [0, -1], [1, 0] // right, down left, up
    ];

    const visited = new Set();
    visited.add(`${start[0]}-${start[1]}`);

    while (queue.length) {
        const [row, col, path] = queue.shift();
        const newPath = [...path, [row, col]];

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // return the path when the end is reached
            if (newRow === end[0] && newCol === end[1]) {
                return newPath
            }

            if (newRow >= 0 && newCol >= 0 &&
                newRow < rows && newCol < cols &&
                matrix[newRow][newCol] === 1 && !visited.has(`${newRow}-${newCol}`)) {
                visited.add([newRow, newCol]);
                queue.push([newRow, newCol, newPath]);
            }
        }
    }
    return null // did not find a route

}

console.log(findShortestPath(matrix, start, end));