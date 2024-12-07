
// solution not working
function findPeaksAndValleys2(inputArray) {
    if (inputArray.length <= 2) {
        return inputArray; // Base case: array with 2 or fewer elements
    } else {
        let peaksAndValleys = [];
        // Divide the array into two halves
        let mid = Math.floor(inputArray.length / 2);
        let leftHalf = inputArray.slice(0, mid);
        let rightHalf = inputArray.slice(mid);
        console.log('leftHalf', leftHalf, 'rightHalf', rightHalf)

        // Recursively find peaks and valleys in each half
        let leftResult = findPeaksAndValleys(leftHalf);
        let rightResult = findPeaksAndValleys(rightHalf);

        // Merge the results from left and right halves
        peaksAndValleys.push(...leftResult);
        peaksAndValleys.push(...rightResult);

        // Find peaks and valleys between the two halves
        for (let i = 1; i < leftResult.length; i += 2) {
            if (leftResult[i] > leftResult[i - 1] && leftResult[i] > leftResult[i + 1]) {
                peaksAndValleys[i] = leftResult[i]; // Peak
            } else if (leftResult[i] < leftResult[i - 1] && leftResult[i] < leftResult[i + 1]) {
                peaksAndValleys[i] = leftResult[i]; // Valley
            }
        }
        for (let i = 1; i < rightResult.length; i += 2) {
            if (rightResult[i] > rightResult[i - 1] && rightResult[i] > rightResult[i + 1]) {
                peaksAndValleys[mid + i] = rightResult[i]; // Peak
            } else if (rightResult[i] < rightResult[i - 1] && rightResult[i] < rightResult[i + 1]) {
                peaksAndValleys[mid + i] = rightResult[i]; // Valley
            }
        }
        return peaksAndValleys;
    }
}

const inputArray2 = [1, 3, 5, 4, 7, 6, 2];
let result = findPeaksAndValleys2(inputArray2);
console.log("Peaks and valleys:", result);






// Divide and Conquer Solution (https://patrickkarsh.medium.com/10-11-the-peaks-and-valleys-problem-explained-with-solutions-in-ruby-javascript-and-python-44142c567c08#:~:text=The%20%E2%80%9Cpeaks%20and%20valleys%E2%80%9D%20problem,valley)%20than%20its%20neighboring%20values.)
// Below is a Divide and Conquer approach to solving the “peaks and valleys” problem in JavaScript solution.

// the below code is not working as intended

function findPeaksAndValleys(arr, start, end) {
    // console.log('arr:', arr, 'start', start, 'end', end);

    if (start === end) {
        // Base case: If the subarray has only one element, it's both a peak and a valley
        return [start];
    } else {
        const mid = Math.floor((start + end) / 2);
        console.log('mid:', mid);
        const left = findPeaksAndValleys(arr, start, mid);
        const right = findPeaksAndValleys(arr, mid + 1, end);

        // console.log('left:', left);
        // console.log('right:', right);


        // Merge the results from the left and right subarrays
        const merged = left.concat(right);
        // console.log('merged:', merged);

        // Check the middle element and its neighbors
        if (arr[mid] >= arr[mid - 1] && arr[mid] >= arr[mid + 1]) {
            // Mid is a peak
            merged.push(mid);
        } else if (arr[mid] <= arr[mid - 1] && arr[mid] <= arr[mid + 1]) {
            // Mid is a valley
            merged.push(mid);
        }

        return merged;
    }
}
// const midTest = Math.floor((0 + 6) / 2);
// console.log('midTest:', midTest);

const inputArray = [1, 3, 5, 4, 7, 6, 2];
// const peaksAndValleys = findPeaksAndValleys(inputArray, 0, inputArray.length - 1);
// console.log(peaksAndValleys); // Output: [2, 4, 6]