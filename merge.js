// https://leetcode.com/problems/merge-sorted-array/

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]
// Explanation: The arrays we are merging are[1, 2, 3] and[2, 5, 6].
// The result of the merge is[1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// merge2 passes all tests
const merge2 = (nums1, m, nums2, n) => {
    nums1.splice(m, nums1.length - m); // Truncate nums1 to length m
    nums1.push(...nums2); // Append nums2 elements to nums1
    nums1.sort((a, b) => a - b); // Sort nums1 in non-decreasing order
    console.log('nums1', nums1);
};

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Output should be [1, 2, 2, 3, 5, 6]

// the below does not pass tests there is an issue with the way nums1 is modified
const merge = (nums1, m, nums2, n) => {
    nums1.splice(m);
    nums1 = [...nums1, ...nums2].sort(); // cannot do this, num1 will not be changed out of the functions scope with [...nums1, ...nums2]
    console.log('nums1', nums1);
};
// const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1,2,2,3,5,6]
// merge(nums1, m, nums2);