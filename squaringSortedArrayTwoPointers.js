// Problem Statement (https://www.designgurus.io/course-play/grokking-the-coding-interview/doc/63ddacd4fcc4ca873d5fbfbc)
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

// Example 1:
// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

const squareSortedArray = (nums) => {
    const n = nums.length;
    const dp = Array(n).fill(null).map((a) => Array(a).fill(false))
    console.log('dp', dp)
    const squares = Array(n).fill(0);
    let highestSquareIndex = n - 1;
    let left = 0, right = n - 1;
    let leftSquare, rightSquare = 0;
    while (left <= right) {
        console.log('nums[left]', nums[left], 'nums[right]', nums[right])

        // Calculate the squares of the elements at the left and right pointers
        leftSquare = nums[left] * nums[left];
        rightSquare = nums[right] * nums[right];

        //Compare the squares and store the larger square in the output array
        if (leftSquare > rightSquare) {
            squares[highestSquareIndex] = leftSquare;
            left += 1;
        } else {
            console.log('went in else, right square bigger')
            squares[highestSquareIndex] = rightSquare;
            right -= 1;
        }
        console.log('squares', squares)
        highestSquareIndex -= 1;
    }
    console.log('squares', squares)
    return squares;
}
const nums = [-2, -1, 0, 2, 3]; // Output: [0, 1, 4, 4, 9]
console.log('squareSortedArray', squareSortedArray(nums));




