



// longest palindrome using dp
// create a 2d arrays, the row and colums representing the relationship of elements
// mark all single elements of the dp array as true as all single charachters are palindrome by definition
// check for subsrting s with length 2 if they are palindrome mark true on the dp array
// lastly check for substrings with more than length 2 and do the same as above also check



const longestPalindrome = (s) => {
    // console.time("dp");
    const n = s.length;
    if (n === 0) return "";

    // Initialize a 2D array to store the palindrome status
    const dp = Array.from({ length: n }, () => Array(n).fill(false));
    // console.log('at start, 1 dp', dp)
    let start = 0;
    let maxLength = 1;
    // All substrings of length 1 are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    console.log('substrings of length 1, 2 dp', dp)
    // Check for substrings of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // console.log('substrings of length 2, 3 dp', dp)
    // Check for substrings longer than 2
    for (let length = 3; length <= n; length++) {
        for (let i = 0; i < n - length + 1; i++) {
            const j = i + length - 1; // babad substring: bab, i = 0 = b, j = i + length -1 = 0 + 3 - 1 = 2 = b (last char) of this substring "bab", dp[i + 1][j - 1] represents middle char "a" which is true

            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                start = i;
                maxLength = length;
            }
        }
    }
    console.log('substrings longer than 2, 4 dp', dp)
    // console.timeEnd("dp");

    // Return the longest palindrome substring
    return s.substring(start, start + maxLength);
};

// Example usage
const inputString = "babad" // "babad"; // abracadabra
console.log(longestPalindrome(inputString)); // Output: "bab" or "aba"
// [
//     [ true, false, false, false, false ],
//     [ false, true, false, false, false ],
//     [ false, false, true, false, false ],
//     [ false, false, false, true, false ],
//     [ false, false, false, false, true ]
//   ]


// matrix: [ // 4 rows and 7 columns
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x']   
// ]

dp: [
    ['P', 'L', 'R', 'x', 'x', 'x', 'x'],
    ['A', 'I', 'I', 'x', 'x', 'x', 'x'],
    ['Y', 'S', 'N', 'x', 'x', 'x', 'x'],
    ['P', 'H', 'G', 'x', 'x', 'x', 'x']
]
