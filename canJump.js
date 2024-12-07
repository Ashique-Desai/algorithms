// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.
// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// && nextElement < nums.length - 1


// below is solution from leetcode, this works, I solved it using this after trying to work on my own - above code
var canJump2 = function (nums) {
    // Base condition...
    if (nums.length <= 1)
        return true;
    // To keep the maximum index that can be reached...
    let maximum = nums[0];
    // Traverse all the elements through loop...
    for (let i = 0; i < nums.length; i++) {
        //if there is no way to jump to next...
        // so we should return false...
        if (maximum <= i && nums[i] == 0)
            return false;
        //update the maximum jump...    
        if (i + nums[i] > maximum) {
            maximum = i + nums[i];
        }
        //maximum is enough to reach the end...
        if (maximum >= nums.length - 1)
            return true;
    }
    return false;
};


// below is my original solution spend 3 - 4 hours on coming up with it, passes most of the test cases but not all (140/170 pass) April 30 2024
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => { //  || nextElement > lastElement - nums.indexOf(nextElement)
    if (nums.length < 2) {
        return true;
    }
    const lastElement = nums.length - 1;
    let nextElement = 0;
    let maxJump = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxJump = nums[0];
        nextElement = i + nums[i];
        if (maxJump < lastElement && nums[i + 1] === 0 && nextElement < lastElement || nums[0] === 0) {
            return false;
        }
        if (maxJump < nums[i]) {
            maxJump = nums[i];
        }
        if (nextElement === lastElement && nums[i + 1] !== 0 || nextElement > lastElement) {
            console.log('nextElement, lastElement', nextElement, lastElement, 'maxJump', maxJump)
            return true;
        }
    }

    return false;
};

const nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));




