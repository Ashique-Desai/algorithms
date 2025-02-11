const isValidSudoku = (board) => {
    const rowSets = new Array(9).fill().map(() => new Set())
    const colSets = new Array(9).fill().map(() => new Set())
    const boxSets = new Array(9).fill().map(() => new Set())

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {

            let num = board[r][c]
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)

            if (num === ".") continue // // Skip empty cells

            if (rowSets[r].has(num) || colSets[c].has(num) || boxSets[boxIndex].has(num)) {
                return false
            }

            rowSets[r].add(num)
            colSets[c].add(num)
            boxSets[boxIndex].add(num)
        }
    }
    return true
}

const board =
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]

console.log(isValidSudoku(board))