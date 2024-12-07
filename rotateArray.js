// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    k = k < nums.length ? k : k % nums.length
    const deleted = nums.splice(nums.length - k, nums.length - 1);
    nums.unshift(...deleted);
    console.log('nums', nums);
};

const nums = [1, 2], k = 5; // [1, 2, 3, 4, 5, 6, 7]
rotate(nums, k);

// I had solved the below on my own but the problem has to be solved in place, cannot create a new array and return anything!
// var rotate = function (nums, k) {
//     const breakHere = nums.length - k;
//     const front = nums.slice(breakHere);
//     const back = nums.slice(0, breakHere);
//     const rotatetedArray = [...front, ...back];
//     console.log('breakHere', breakHere, 'front', front, 'back', back, 'rotatetedArray', rotatetedArray);
//     return rotatetedArray;
// };

// const nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
// rotate(nums, k);