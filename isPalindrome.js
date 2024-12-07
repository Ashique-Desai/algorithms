
// https://leetcode.com/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.



var isPalindrome = function (s) {
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let lastChar = cleanedString.length - 1;
    return cleanedString.split('').every((char, i) => {
        return char === cleanedString[cleanedString.length - 1 - i];
    })
};