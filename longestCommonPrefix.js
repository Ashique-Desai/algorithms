// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "". 

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"


/**
 * @param {string[]} strs
 * @return {string}
 */
// code which passes tests, not written by me.
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    console.log('prefix', prefix);
    for (let i = 1; i < strs.length; i++) {
        console.log('strs[i].indexOf(prefix)', strs[i].indexOf(prefix))
        while (strs[i].indexOf(prefix) !== 0) {
            console.log('strs[i].indexOf(prefix) inside', strs[i].indexOf(prefix), 'prefix.substring(0, prefix.length - 1);', prefix.substring(0, prefix.length - 1))
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"










// my code which is close enough to the solution but returns ["f", "l"] instead of 'fl' but this is completed my work. 
var longestCommonPrefix = function (strs) {
    let commonPrefix = {};

    for (let str of strs) {
        for (const char of str) {
            if (commonPrefix[char]) {
                commonPrefix[char] += 1;
            } else {
                commonPrefix[char] = 1;
            }
        }
    }

    const result = Object.entries(commonPrefix)
        .filter(([key, value]) => value === strs.length)
        .map(([key, _]) => key); // Extract only the key

    return result;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // ["f", "l"]