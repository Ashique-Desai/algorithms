// 54. Spiral Matrix https://leetcode.com/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-interview-150

// Given an m x n matrix, return all elements of the matrix in spiral order. 

// Example 1:
// Input: matrix = [
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ]
// Output: [1,2,3,6,9,8,7,4,5]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder2 = (matrix) => {
    let left = 0, right = matrix[0].length - 1
    let top = 0, bottom = matrix.length - 1
    const result = []
    while (left <= right && top <= bottom) {
        // move to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }
        top++ // Move boundary down

        // move down
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])
        }
        right-- // Move boundary left

        // move left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom-- // Move boundary up
        }

        // move up if there is still a column left
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            console.log({ left, right, top, bottom, result })
            left++
        }

    }
    return result
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [1,2,3,6,9,8,7,4,5]

console.log(spiralOrder2(matrix))













// the below code passes a couple of test cases, a more general solution is needed, handle hard coded movements dynamically
var spiralOrder = function (matrix) {
    // initially increment only col
    // when last col and first row increment row
    // when last col and last row decrement col
    // when first col and last row decrement row
    // when not last and first row and first col increment col till less than index of last col

    const result = []
    const rows = matrix.length
    const colLength = matrix[0].length
    let row = 0
    let col = 0
    // const dp = Array.from({ length: rows }, () => Array(colLength).fill(false)) // use dynamic programming to store visited cells

    while (row === 0 && col != colLength) {
        result.push(matrix[row][col])
        col++
    }
    row++
    while (col === colLength && row < rows) {
        console.log({ row, col })
        result.push(matrix[row][col - 1])
        row++
    }
    col--
    while (row === rows && col > 0) {
        result.push(matrix[row - 1][col - 1])
        col--
    }
    row = 1
    while (row === 1 && col < colLength - 1) {
        result.push(matrix[row][col])
        col++
    }
    return result
};

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [1,2,3,6,9,8,7,4,5]

// console.log(spiralOrder(matrix))