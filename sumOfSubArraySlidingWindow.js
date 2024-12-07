// Efficient way using sliding window method to iterate on an array of k length of subarray (https://www.geeksforgeeks.org/window-sliding-technique/)
// Note: In the geek for geek the below example is correct but the example they have shown of inefficient brute force way is actually wrong, atleast for JS.


// Sliding windoe method

// Javascript code for
// O(n) solution for finding
// maximum sum of a subarray
// of size k using the sliding window method
function maxSumSlidingWindow(arr, n, k) {
    let max = 0;
    let sum = 0;
    // find initial sum of first k elements
    for (let i = 0; i < k; i++) {
        console.log('loop 1, arr[i]', arr[i])
        sum += arr[i];
        max = sum;
    }
    // iterate the array once
    // and increment the right edge
    for (let i = k; i < n; i++) {
        sum += arr[i] - arr[i - k];

        // compare if sum is more than max,
        // if yes then replace
        // max with new sum value
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}

// Driver code
let arr2 = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k2 = 4;
let n2 = arr2.length;
console.log(maxSumSlidingWindow(arr2, n2, k2));


// inefficient way:
// Time complexity of O(k * n) would involve 
// using two nested loops where the outer loop iterates over the array, and for each element 
// in the array, the inner loop iterates over the next k elements to calculate the sum of the subarray starting at that element
function maxSum3(arr, n, k) {
    let max_sum = 0;

    // Iterate over the array
    for (let i = 0; i <= n - k; i++) { // Outer loop runs n-k times
        let window_sum = 0;
        // Calculate sum of subarray of size k starting at index i
        for (let j = i; j < i + k; j++) { // Inner loop runs k times
            console.log('i , k', i, k, 'i + k', i + k, 'j', j)
            window_sum += arr[j];
        }

        // Update max_sum if current window_sum is greater
        max_sum = Math.max(max_sum, window_sum);
    }

    return max_sum;
}

let arr3 = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k3 = 4;
let n3 = arr3.length;

// console.log(maxSum3(arr3, n3, k3));