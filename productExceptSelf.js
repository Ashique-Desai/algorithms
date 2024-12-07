// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// I tried to come up with a solution but later solved this problem with a help of a solution in leetcode but also practiced writing
// the below code without looking at the solution May 2 & 3 2024
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    const n = nums.length;
    let prefix = new Array(n).fill(1);
    let suffix = new Array(n).fill(1);
    // get prefix product by iterating 
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }
    console.log('prefix', prefix)
    console.log('suffix', suffix)
    console.log('answer', answer)
    return answer;
};

const nums = [1, 2, 3, 4] // Output: [24,12,8,6]

productExceptSelf(nums);