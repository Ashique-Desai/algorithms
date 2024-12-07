
// overn - timer - ding - 78204.mp3




// https://leetcode.com/problems/sort-colors/description/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors2 = function (nums) {
    let n = nums.length;
    // set pointers low = 0 index and high = max index
    let low = 0;
    let mid = 0;
    let high = n - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            // console.log('0: nums[low]', nums[low], 'nums[i]', nums[i], 'i', i)
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
            console.log('nums, after nums[i] === 0', nums)
        } else if (nums[mid] === 1) {
            // console.log('1: nums[mid]', nums[mid], 'nums[i]', nums[i], 'i', i)
            mid++;
            console.log('nums, after nums[i] === 1', nums)

        } else {
            // console.log('2: nums[high]', nums[high], 'nums[i]', nums[i], 'i', i)
            [nums[high], nums[mid]] = [nums[mid], nums[high]];
            high--;

        }
    }
    return nums;
};
const nums2 = [2, 0, 2, 1, 1, 0]; // Output: [0,0,1,1,2,2]
console.log(sortColors2(nums2));


// var sortColors = function (nums) {
//     let n = nums.length;
//     let sorted = Array(n).fill(0);
//     let left = 0;
//     let right = n - 1;
//     let leftNumber, rightNumber = 0;
//     let highestIndex = n - 1;
//     while (left <= right) {
//         leftNumber = nums[left];
//         rightNumber = nums[right]
//         if (leftNumber > rightNumber) {
//             sorted[highestIndex] = leftNumber;
//             left += 1;
//         } else {
//             sorted[highestIndex] = rightNumber;
//             right -= 1;
//         }
//         highestIndex -= 1;
//     }
//     return sorted;
// };

// // Example 1:
// // Input: nums = [2,0,2,1,1,0]
// // Output: [0,0,1,1,2,2]
// const nums = [2, 0, 2, 1, 1, 0];
// console.log(sortColors(nums));