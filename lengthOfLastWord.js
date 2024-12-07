// https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal 
// substring
//  consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
};