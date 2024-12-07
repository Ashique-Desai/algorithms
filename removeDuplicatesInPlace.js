// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. 
// The relative order of the elements should be kept the same. Since it is impossible to change the length of the array in some languages, you must 
// instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, 
// then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums. Do not allocate extra space for another array. 
// You must do this by modifying the input array in-place with O(1) extra memory.


// My own solution without external help, 56ms Beats 82.90%, took less than 30 mins to solve
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    n = nums.length;
    const frequencyOfnum = {}
    for (let i = n - 1; i >= 0; i--) {
        if (frequencyOfnum[nums[i]]) {
            frequencyOfnum[nums[i]] += 1;
        } else {
            frequencyOfnum[nums[i]] = 1;
        }
        if (frequencyOfnum[nums[i]] > 2) {
            nums.splice(i, 1);
        }
    }
};



// previously solved by me
var removeDuplicates = function (nums) {
    let resultArray = [];
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] === nums[i + 1]) && (nums[i + 1] === nums[i + 2])) {
            continue
        }
        resultArray.push(nums[i]);
        console.log('nums[k] = nums[i]', nums[k] = nums[i])
        k++
    }
    console.log('resultArray', resultArray)
    return k;
};
const nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));