

// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/description/?envType=study-plan-v2&envId=top-interview-150
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]



var rotate = function (matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {  // Note: j starts from i + 1 to avoid redundant swaps
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};

// Correct In-Place Approach:
// To rotate a matrix in place, we can use two steps:

// Transpose the matrix (convert rows into columns).
// Reverse each row (to achieve a 90-degree clockwise rotation).


// Explanation:
// Transpose the matrix
// Swap matrix[i][j] with matrix[j][i], which effectively flips the matrix along its diagonal.
`
Before Transpose:
1  2  3       1  4  7
4  5  6  -->  2  5  8
7  8  9       3  6  9
`

    // Reverse each row
    // Reverse each row to achieve the 90 - degree clockwise rotation.   
    `
Before Reverse:
1  4  7       7  4  1
2  5  8  -->  8  5  2
3  6  9       9  6  3
`




// my previous approach to flip the matrix in place (not sucessful)
var rotate = function (matrix) {
    const rowLen = matrix.length
    const colLen = matrix[0].length
    // first row shall become last col, 2nd row 2nd last col and so on
    for (let r = 0; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
            matrix[c][Math.abs((r + 1) - rowLen)] = matrix[r][c]
        }
    }
};

// this approach attempts to update the matrix in place, but it runs into issues because it is modifying values while iterating, leading to overwriting values before they've been used.

// Issues with this approach:
// Overwriting values: it is replacing values in the matrix as you iterate, which means that the original values get lost before they are placed in their correct positions.
// Incorrect indexing: this calculation for placing values doesn't properly ensure the correct 90-degree rotation.
