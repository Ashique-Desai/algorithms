// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], 
// you can jump to any nums[i + j] where:
// 0 <= j <= nums[i] and i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1]. 

// Example 1:
// Input: nums = [2,3,1,1,4] // notes: j=1 0 <= 1 <= nums[i](2)..., essentially you can take a 
// smaller jump than the value of nums[i] but you cannot take a bigger jump than num[i]!
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.


/**
 * @param {number[]} nums
 * @return {number}
 */
// leetcode users solution
const jump2 = (nums) => {
    let len = nums.length - 1, curr = 0, next = 0, ans = 0; // ans = answer(jumps)
    for (let i = 0; i < nums.length; i++) {
        console.log('i', i);
        if (i > curr) {
            console.log('curr before', curr);
            ans++;
            curr = next;
            console.log('ans', ans, 'curr', curr, 'next', next)
        }
        next = Math.max(next, i + nums[i]);
    }
    return ans;
}

const nums2 = [2, 3, 1, 1, 4];
console.log(jump2(nums2));




// below is what I came up with, does not pass all tests yet.
const jump = (nums) => {
    let jumps = 0;
    let maxJump = 0;
    // base condition
    if (nums.length <= 1) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        maxJump = nums[0];
        if (i + nums[i] > maxJump) {
            maxJump = i + nums[i];
            console.log('maxJump', maxJump)

        }
        jumps++;
        if (maxJump >= nums.length - 1) {
            return jumps;
        }
        // console.log('nums[i]', nums[i], 'jumps', jumps);
    }

};
// const nums = [2, 3, 1, 1, 4];
// console.log(jump(nums));

