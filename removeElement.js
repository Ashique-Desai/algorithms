// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

// note this is my own solution
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    console.log('original nums:', nums)
    nums.sort((a, b) => a - b); // nums: [ 2, 2, 3, 3 ]
    const lengthVal = nums.filter((n) => n === val).length;
    // Use a while loop to remove all occurrences of `val`
    // let indexVal;
    // while ((indexVal = nums.indexOf(val)) !== -1) { // another way of removing elements in a loop
    //     nums.splice(indexVal, 1);
    // }
    const indexVal = nums.indexOf(val);
    // Remove elements from array in-place using splice
    nums.splice(indexVal, lengthVal);
    console.log('nums:', nums, { val, indexVal, lengthVal })
    return nums
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2;

console.log(removeElement(nums, val));


// solution from leetcode which is more efficient in time complexity
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i -= 1; // decrement i because one element will be removed from array, so the index of next numbers change, 
            //      // if we do not decrement i we may skip checking one number!, this is beautiful and simple.
        }
    }
};