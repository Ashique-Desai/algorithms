// The challenge: Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true 
// if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. 
// For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, and may contain negative numbers.


// Same problem I have solved without Dynamic programming elsewhere - arraySumChallengeCoderbyte.js in this directory
// Dynamic programming is more efficient, try to understnad this code
const arraySumChallenge = (arr) => {
    // sort and extract values (target), calculate sum of all nums
    const sortedArray = arr.sort((a, b) => a - b); // sort list in increasing order
    const target = sortedArray.pop(); // extract the biggest number from array
    const sumOfFullList = sortedArray.reduce((a, b) => a + b, 0); // sum of all numbers in array excluding target

    // if sum of all numbers in the array equals target return true (found combination)
    if (sumOfFullList === target) {
        return true;
    } else {
        // Otherwise, check if any combination of the remaining elements sums to the target
        return checkCombinationsForTarget(sortedArray, target);
    }
}

// Function to check if any combination of elements in the array sums to the target using dynamic programming
const checkCombinationsForTarget = (arr, target) => {
    const dp = Array(target + 1).fill(false);
    dp[0] = true; // base case: zero sum is always possible with an empty subset

    for (const num of arr) {
        for (let i = target; i >= num; i--) {
            if (dp[i - num]) {
                dp[i] = true;
                console.log('inside if', 'i:', i, 'num:', num, 'dp[i - num:', dp[i - num], 'dp[i]:', dp[i], 'dp:', dp);
            }
        }
    }

    return dp[target];
}


console.log(arraySumChallenge([1, 2, 3, 4, 6])); // output true, // input: [1, 2, 3, 5, 7, 8, 10] 
// [4, 6, 23, 10, 1, 3] // output true because 4 + 6 + 10 + 3 = 23


// explanation of how the above dp code works to check all combinations and see if any sun to the target:
// Illustrative Example
// Given an array [1, 2, 3] and target 4:

// Initial DP array:

// javascript
// Copy code
// dp = [true, false, false, false, false];
// Processing 1:

// javascript
// Copy code
// num = 1;
// for (let i = 4; i >= 1; i--) {
//     if (dp[i - 1]) {
//         dp[i] = true;
//     }
// }
// // dp becomes [true, true, false, false, false]
// This means we can achieve the sum 1.

// Processing 2:

// javascript
// Copy code
// num = 2;
// for (let i = 4; i >= 2; i--) {
//     if (dp[i - 2]) {
//         dp[i] = true;
//     }
// }
// // dp becomes [true, true, true, true, false]
// This means we can achieve the sums 2 and 3.

// Processing 3:

// javascript
// Copy code
// num = 3;
// for (let i = 4; i >= 3; i--) {
//     if (dp[i - 3]) {
//         dp[i] = true;
//     }
// }
// // dp becomes [true, true, true, true, true]
// This means we can achieve the sum 4 because dp[4 - 3] = dp[1] is true.


// Output of  console.log('inside if', 'i:', i, 'num:', num, 'dp[i - num:', dp[i - num], 'dp[i]:', dp[i], 'dp:', dp):
// inside if i: 1 num: 1 dp[i - num: true dp[i]: true dp: [
//     true,  true,
//     false, false,
//     false, false,
//     false
//   ]
//   inside if i: 3 num: 2 dp[i - num: true dp[i]: true dp: [
//     true,  true,
//     false, true,
//     false, false,
//     false
//   ]
//   inside if i: 2 num: 2 dp[i - num: true dp[i]: true dp: [
//     true,  true,
//     true,  true,
//     false, false,
//     false
//   ]
//   inside if i: 6 num: 3 dp[i - num: true dp[i]: true dp: [
//     true,  true,
//     true,  true,
//     false, false,
//     true
//   ]
//   inside if i: 5 num: 3 dp[i - num: true dp[i]: true dp: [
//     true,  true,
//     true,  true,
//     false, true,
//     true
//   ]
//   inside if i: 4 num: 3 dp[i - num: true dp[i]: true dp: [
//     true, true,
//     true, true,
//     true, true,
//     true
//   ]
//   inside if i: 3 num: 3 dp[i - num: true dp[i]: true dp: [
//     true, true,
//     true, true,
//     true, true,
//     true
//   ]
//   inside if i: 6 num: 4 dp[i - num: true dp[i]: true dp: [
//     true, true,
//     true, true,
//     true, true,
//     true
//   ]
//   inside if i: 5 num: 4 dp[i - num: true dp[i]: true dp: [
//     true, true,
//     true, true,
//     true, true,
//     true
//   ]
//   inside if i: 4 num: 4 dp[i - num: true dp[i]: true dp: [
//     true, true,
//     true, true,
//     true, true,
//     true
//   ]
//   true










