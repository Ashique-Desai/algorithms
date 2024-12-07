
// https://leetcode.com/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].





// single pass with hash map
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const n = nums.length;
    let numMap = {}
    for (let i = 0; i < n; i++) {
        const compliment = target - nums[i];
        if (compliment in numMap) {
            return [numMap[compliment], i]
        }
        numMap[nums[i]] = i;
    }
};