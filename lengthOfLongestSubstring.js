// https://leetcode.com/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-interview-150

// Longest Substring Without Repeating Characters
// jan 9 2025

// below solution passes all tests
var lengthOfLongestSubstring = function (s) {
    let longestSubstring = 0
    let left = 0
    let repeatedChar = new Set()
    for (let right = 0; right < s.length; right++) {
        while (repeatedChar.has(s[right])) {
            repeatedChar.delete(s[left])
            left++
        }
        repeatedChar.add(s[right])
        longestSubstring = Math.max(longestSubstring, right - left + 1)
    }
    return longestSubstring
};

// Explanation of the above approach and specifically why we delete 

// The reason for using charSet.delete(s[left]) instead of charSet.delete(s[right]) lies in the logic of the sliding window approach. Let's break it down:

// Sliding Window Concept:
// The left pointer represents the beginning of the current substring without duplicate characters.
// The right pointer iterates through the string to expand the window by adding new characters.
// If a duplicate character is encountered at s[right], the goal is to shrink the window from the left (adjusting left) until the duplicate is removed.
// Why charSet.delete(s[left])?
// The duplicate s[right] indicates that the current window (from left to right) has a conflict.
// By incrementing left and removing s[left] from the set, we shrink the window from the left, ensuring that the substring remains valid (without duplicates).
// Removing s[right] would not help, as it is the character we are currently processing and want to include in the window after resolving duplicates.
// Example: "pwwkew"
// Initial State:

// left = 0, right = 0, charSet = {}.
// Add p: charSet = {'p'}, maxLength = 1.
// Expand to w:

// Add w: charSet = {'p', 'w'}, maxLength = 2.
// Expand to w:

// Duplicate found (s[right] = 'w').
// Remove s[left] = 'p' and increment left: charSet = {'w'}, left = 1.
// Shrink further:

// Duplicate still present (s[right] = 'w').
// Remove s[left] = 'w' and increment left: charSet = {}, left = 2.
// Add w:

// Now add w without conflict: charSet = {'w'}, maxLength = 2.
// Continue expanding:

// Add k: charSet = {'w', 'k'}, maxLength = 2.
// Add e: charSet = {'w', 'k', 'e'}, maxLength = 3.



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// below solution is my original approach but it was not working, i had to brainstorm and take chat gpts help to make it pass all tests.
// my approach here uses object instead of the SET and keeps track of the index, this avoids the need of deleting from the set. but it is not more efficient from the above approach

var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let maxLength = 0;
    let charIndexMap = {}; // Object to store character indices

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If the character is already in the map and within the current window
        if (charIndexMap[currentChar] >= left) {
            // Move the left pointer to the index after the duplicate character
            left = charIndexMap[currentChar] + 1;
        }

        // Update the character's index in the map
        charIndexMap[currentChar] = right;

        // Calculate the length of the current substring
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// below solution passes 400/900 something tests, this is my own solution need to work on the rest of the test cases, refactor this.

var lengthOfLongestSubstring = function (s) {
    let longestSubstring = 0
    let left = 0

    if (s === " " || s.length === 1) {
        return 1
    }

    let charInSubstring = new Set()
    for (let right = 0; right < s.length; right++) {
        console.log({ left, right, charInSubstring })
        console.log('charInSubstring.has(s[r:', charInSubstring.has(s[right]))
        if (charInSubstring.has(s[right])) {
            console.log('in while', { left, right, charInSubstring })
            longestSubstring = Math.max(longestSubstring, (right - 1) - left + 1)
            left = right
            charInSubstring.clear()
        }
        // longestSubstring = Math.max(longestSubstring, right - left + 1)
        charInSubstring.add(s[right])


    }
    return longestSubstring
};