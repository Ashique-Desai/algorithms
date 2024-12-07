/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
    const numbersDiagonal = Math.floor(numRows / 2);
    let count = 0;
    // calculate what 2d matrix to create: formula, divide string length by numRow and max.ciel...
    let dp = Array.from({ length: numRows }, () => Array(7).fill("x"));
    const full = numRows;
    let currRow = 0;
    let currCol = 0;
    for (let i = 0; i < s.length; i++) {
        // Populate the 2d matrix created with the string elements for regular in column and for skip diagonally.

        // console.log({currRow, currCol, i, full}, 's[i]', s[i], )
        if (currRow < full && count != numRows && count >= 0) {
            // console.log('went in if:', {currRow, currCol, i, full}, 's[i]', s[i], {count} )
            dp[currRow][currCol] = s[i];
            // console.log('dp in if', {dp})
            currRow += 1;
            count++;
        } else {
            // need to use the skip logic here and append the zag elements diagonally to dp
            // below code gives us the zag elements

            // reset currRow as it got incremented after last append
            currRow -= 1; // reset
            console.log("went in else", { count });

            const skip = [];
            let skipBy = 0;
            if (count === numRows) {
                console.log("went in if count === numRows");
                for (let j = 0; j < numbersDiagonal; j++) {
                    // console.log('went in the skip loop')
                    skip.push(i + skipBy);
                    skipBy++;

                    // add each zag element and increment the currCol by one for each (before adding the zag element decrement the row by 1)
                    console.log("in else before", { currCol, currRow });
                    currCol += 1;
                    currRow -= 1;
                    console.log("in else after", { currCol, currRow });
                    dp[currRow][currCol] = s[i];
                    console.log("in zag loop", { dp });
                }

                // console.log({skip, currRow, currCol, i, full}, 's[i]', s[i], {numbersDiagonal, count})
                count = -numbersDiagonal;
                // currCol += 1; //need to increment the colums based of the zag element length, 2 elements = increment by 2
            }
            count++;
            currRow = 0; // reset row to 0
        }
    }
    console.log("final dp", { dp });
};

const s = "PAYPALISHIRING";
const numRows = 4;

convert(s, numRows);
// output i am getting:

// correct output, i solved it
dp: [
    ["P", "x", "x", "I", "x", "x", "N"],
    ["A", "x", "L", "S", "x", "I", "G"],
    ["Y", "A", "x", "H", "R", "x", "x"],
    ["P", "x", "x", "I", "x", "x", "x"],
];
// incorrect
dp: [
    ["P", "x", "x", "I", "x", "x", "N"],
    ["A", "x", "A", "S", "x", "R", "G"],
    ["Y", "A", "x", "H", "R", "x", "x"],
    ["P", "x", "x", "I", "x", "x", "x"],
];

dp: [
    ["P", "x", "I", "x", "N", "x", "x"],
    ["A", "x", "S", "x", "G", "x", "x"],
    ["Y", "A", "H", "R", "x", "x", "x"],
    ["P", "x", "I", "x", "x", "x", "x"],
];

// expected output: for numRows 4, s = "PAYPALISHIRING";
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// output of the above func: The diagonal are getting populated correctly initially but later get rewritten by the next charrachter, need to increment the columns correctly to fixt this.

// dp: [
//     ['P', 'x', 'x', 'I', 'x', 'x', 'N'],
//     ['A', 'x', 'x', 'S', 'x', 'x', 'G'],
//     ['Y', 'x', 'A', 'H', 'x', 'R', 'x'],
//     ['P', 'A', 'x', 'I', 'R', 'x', 'x']
// ]

// dp: [
//     ['P', 'x', 'I', 'x', 'N', 'x', 'x'],
//     ['A', 'x', 'S', 'x', 'G', 'x', 'x'],
//     ['Y', 'A', 'H', 'R', 'x', 'x', 'x'],
//     ['P', 'x', 'I', 'x', 'x', 'x', 'x']
// ]

// // dp in zag loop
// // 1
// dp: [
//     ['P', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['A', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['Y', 'A', 'x', 'x', 'x', 'x', 'x'],
//     ['P', 'x', 'x', 'x', 'x', 'x', 'x']
// ]
// //2
// dp: [
//     ['P', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['A', 'x', 'A', 'x', 'x', 'x', 'x'],
//     ['Y', 'A', 'x', 'x', 'x', 'x', 'x'],
//     ['P', 'x', 'x', 'x', 'x', 'x', 'x']
// ]

// dp: [
//     ['P', 'x', 'I', 'x', 'x', 'x', 'x'],
//     ['A', 'x', 'S', 'x', 'x', 'x', 'x'],
//     ['Y', 'A', 'H', 'R', 'x', 'x', 'x'],
//     ['P', 'x', 'I', 'x', 'x', 'x', 'x']
// ]

// dp: [
//     ['P', 'x', 'I', 'x', 'x', 'x', 'x'],
//     ['A', 'x', 'S', 'x', 'R', 'x', 'x'],
//     ['Y', 'A', 'H', 'R', 'x', 'x', 'x'],
//     ['P', 'x', 'I', 'x', 'x', 'x', 'x']
// ]

// earlier version:
// var convert = function(s, numRows) {
//     const numbersDiagonal = Math.floor(numRows / 2)
//     let count = 0;
//      // calculate what 2d matrix to create: formula, divide string length by numRow and max.ciel
//             // add the number of 'skip' to this as each skip will need its own column we get the columns needed
//             // we already know the rows (numRow), we do not need to calculate it.
//             // example for numRow 4, when s.length is 14: 14 - 4 (total skipped/zag elements)
//             // then divide this by rows ex: 14 - 4 = 10/4(rows) = 2.5, i.e round off to 3 columns
//             // add the zag elements to the above 3, i.e: 3 + 4 = 7 columns
//             // so we can code: const matrix = Array.from({length: numRows}, () => Array(7).fill("x"))
//             let dp = Array.from({length: numRows}, () => Array(7).fill("x"))
//       const full = numRows;
//         let currRow = 0;
//         let currCol = 0;
//     for(let i=0; i < s.length; i++) {
//         // dp[0][1] = s[i];

//         // TODO: Populate the 2d matrix created with the string elements for reglar in column and for skip diagonally.

//         // console.log({currRow, currCol, i, full}, 's[i]', s[i], )
//         if (currRow < full) {
//              console.log('went in:', {currRow, currCol, i, full}, 's[i]', s[i], )
//             dp[currRow][currCol] = s[i];
//             currRow += 1;

//         } else {
//             // need to use the skip logic here and append the zag elements diagonally to dp
//             // TODO: working on this below is pseudo code
//             if(skip) {
//                 dp[currRow - 1][currCol + 1] = s[i];
//                 currRow--;
//                 currCol++;
//             }
//             currCol += 1;
//             currRow = 0; // reset row to 0
//         }

//         if(count === numRows) {

//             // stop the row and as the max rows are reached for this column
//             // add the next numbersDiagonal to the next column FOR NOW JUST MAY BE PUSH IT IN AN ARRAY)
//             // we need to skip the indexes which are diagonal(zag) in order to count the next iterations correctly
//             // code to skip iterating on the diaonal zag indexes

//             // below code gives us the zag elements
//             const skip = [];
//             let skipBy = 0;
//             for(let j=0; j < numbersDiagonal; j++) {
//                 skip.push(i + skipBy)
//                 skipBy++;
//             }
//             // console.log({count, i, skip}, 's[i]', s[i])

//             // we can use below logic to skip the zag indexes but it is not so useful at the moment
//             // i need to fix the indexing issue due to the start index of zero and the later start
//             if(skip.includes(i)) {
//                 // console.log('skip includes this, we need to skip this', {i, skip})
//             }

//              count = -numbersDiagonal; // reset count // (-) counts the zag indexes to skip as well
//                                        // (-numbersDiagonal is used to adjust the next iteration to start from zero)
//             // note: The above code can be used as building blocks to solve this problem

//         }
//         count++;

//     }
//     console.log('dp after:', {dp})

// };

// went in else { count: 3 }
// went in if count === numRows
// in else before { currCol: 0, currRow: 3 }
// in else after { currCol: 1, currRow: 1 }
// went in else { count: 3 }
// went in if count === numRows
// in else before { currCol: 2, currRow: 3 }
// in else after { currCol: 3, currRow: 1 }
// went in else { count: 3 }
// went in if count === numRows
// in else before { currCol: 4, currRow: 3 }
// in else after { currCol: 5, currRow: 1 }

//  const numbersDiagonal = Math.floor(numRows / 2)
//     let count = 0;
//     for(let i=0; i < s.length; i++) {
//         // console.log(s[i], {i}, {count})

//         if(count >= numRows) {

//             if(i <= numRows ) {
//              const zag = s.slice(i, i + numbersDiagonal);
//              console.log({zag});
//              count = 0;

//             }

//             if(i < (i + numbersDiagonal)) {
//                 // console.log({i }, 'i + numbersDiagonal', i + numbersDiagonal)
//                 // count +=1;
//                 const zag = s.slice(i, i + numbersDiagonal);
//                 console.log({zag});
//                 console.log('if(i < (i + numbersDiagonal))')
//                  console.log({i }, 'i + numbersDiagonal', i + numbersDiagonal)
//                  count = 0;
//                 console.log({count})
//                 continue; // skip the diagonal indexs in the main loop
//             }
//             console.log('outside continue')
//             const incrementI = i + 1;
//             const zag = s.slice(incrementI, incrementI + numbersDiagonal);
//             console.log({zag});
//             count = 0;

//             // const toSkip = i + numbersDiagonal
//             // console.log({toSkip});

//             count += 1;

//         }
//         count += 1;

//     }
