// I got this problem in my interview code assessment for a company called - Clarapath, the challenge was given on CoderByte website on July 5 2024

// The challenge: Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true 
// if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. 
// For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, and may contain negative numbers.

const arraySumChallenge = (arr) => {
    // sort and extract values (target), calculate sum of all nums
    const sortedArray = arr.sort((a, b) => a - b); // sort list in increasing order
    const target = sortedArray.pop(); // extract the biggest number from array
    const sumOfFullList = arr.reduce((a, b) => a + b); // sum of all numbers in array excluding target

    // if sum of all numbers in the array equals target return true (found combination)
    if (sumOfFullList === target) {
        return true;
    } else {
        // Otherwise, check if any combination of the remaining elements sums to the target
        return checkCombinationsForTarget(sortedArray, target);
    }
}

// Function to check if any combination of elements in the array sums to the target
const checkCombinationsForTarget = (arr, target) => {
    let combinations = [[]];
    let sumOfCurrentCombination = 0;

    for (const num of arr) {
        let currentCombination = []; // temporarily hold currently calculated combination
        for (const subset of combinations) {
            currentCombination.push([...subset, num]);
            sumOfCurrentCombination = subset.reduce((a, b) => a + b, 0); // sum of current combination

            // current combinations sum matches target - return true else keep calculating more combinations
            if (sumOfCurrentCombination === target) {
                return true;
            }
        }
        combinations = combinations.concat(currentCombination); // add the currently calculated combination to all combinations array 
    }
    return false;
}


console.log(arraySumChallenge([1, 2, 3, 5, 7, 8, 10]));

// working for the above code
// const arraySumProblemPseudoCode = (arr) => {
//     // get all possible combinations of pairs of 2, 3, 4, n (write a helper func to do this)
//     // created a function called arrayCombinations to do all combinations
//     // then traverse on the combinations efficiently, calculate
//     // check if the total sum === target, if true return true (found a combination equal to target)
//     //   else calculate the difference between target and the biggest number in the array (ecample: list: 1, 2, 3, 5, 7, 8, target: 10 )
//     //      const difference = 10 - 8 = 2, 
//     //      if (arr.includes(difference))  => return true (found a combination equal to target)
//     //      else iterate on all the combinations, duplets, triplets, combinations of 4, 5 and so on and add them to check the sum and return accordingly
//     //      Note: The above step too could be made efficient by calculating the difference between the target and the sum of the combinations to avoid unnecessary iteration.
//     //      Better option would be to return when computing the combinations itself rather than doing all combinations and re-travesing for computing and comparing sum to target
// }

// const arrayCombinations = (arr) => {
//     let result = [[]];  // Start with an empty array as the base case

//     for (let num of arr) {
//         let arrTemp = [];
//         for (let subset of result) {
//             arrTemp.push([...subset, num]);
//         }
//         result = result.concat(arrTemp);
//     }
//     return result;
// };

// console.log(arrayCombinations([1, 2, 3, 5, 7, 8]));


