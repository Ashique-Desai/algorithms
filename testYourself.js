// diff algorithm to test which element was deleted or inserted in an array of elements for 2 sequences (arrays)
//     "" A B E D F
//   "" 0 0 0 0 0 0
//   A  0 1 1 1 1 1
//   B  0 1 2 2 2 2
//   C  0 1 2 2 2 2
//   D  0 1 2 2 3 3
//   F  0 1 2 2 3 4

const diff = (A, B) => {
    const m = A.length;
    const n = B.length;
    // create 2 d array to store the length of the longest common subsequence
    let matrix = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    // console.log('matrix', matrix);
    // fill the matrix
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] === B[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
                // console.log('matrix inside else:', matrix);
            }
        }
    }
    // backtrack on the matrix to check the differences
    let result = [];
    let i = m;
    let j = n;
    while (i > 0 && j > 0) {
        console.log('went in while');
        if (A[i - 1] === B[j - 1]) {
            // No change, move diagonally
            result.unshift({ type: 'same', value: A[i - 1] });
            i--;
            j--;
        } else if (matrix[i - 1][j] >= matrix[i][j - 1]) {
            // deletion in A
            result.unshift({ type: 'delete', value: A[i - 1] })
            i--;
        } else {
            // insertion in B
            console.log('i', i, 'j', j)
            result.unshift({ type: 'insert', value: B[j - 1] })
            j--;
        }
        console.log('at end', 'i', i, 'j', j)


    }
    console.log('result:', result);
    return result;
}

const A = 'ABCDF';
const B = 'ABEDF';
const differences = diff(A, B);
console.log(differences);