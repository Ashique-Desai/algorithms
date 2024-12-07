// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150
// two pointer problems.
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false



// solution by leetcode user, what a simple and elegant solution!
// two pointers are used - sp for string s and tp for string t, the sp is incremented only when s[sp] === t[tp] and tp is always incremented
// this results in sp.length === s.length only if there is matching subsequence in string t, watch video on the link above, if this is confusing. 
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let sp = 0;
    let tp = 0;

    while (sp < s.length && tp < t.length) {
        if (s[sp] === t[tp]) {
            sp++;
        }
        tp++;
    }

    return sp === s.length;
};