/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let result = Infinity
    let sumOfWindow = 0
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        sumOfWindow += nums[right]
        while (sumOfWindow >= target) {
            console.log("in while", { left, right })
            result = Math.min(result, right - left + 1)
            sumOfWindow -= nums[left]
            left++
        }
        console.log("out of while", { left, right })
    }
    return result != Infinity ? result : 0
};

// Example 1:
const target = 7, nums = [2, 3, 1, 2, 4, 3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
console.log(minSubArrayLen(target, nums))