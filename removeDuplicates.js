// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150


// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
// The remaining elements of nums are not important as well as the size of nums.
// Return k.




/**
 * @param {number[]} nums
 * @return {number}
 */
// my own solution without exteranal help - solved it in under 30 mins, 69ms of runtime
var removeDuplicates = function (nums) {
    const n = nums.length;
    let frequencyOfNum = {};
    for (let i = n - 1; i >= 0; i--) {
        if (frequencyOfNum[nums[i]]) {
            frequencyOfNum[nums[i]] += 1;
            nums.splice(i, 1);

        } else {
            frequencyOfNum[nums[i]] = 1;
        }
    }
}
console.log([removeDuplicate([1, 1, 2])]);


// solution from leetcode, takes 35ms runtime
var removeDuplicates2 = function (nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};