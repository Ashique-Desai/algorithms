
// 30. Substring with Concatenation of All Words (https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/?envType=study-plan-v2&envId=top-interview-150)
// You are given a string s and an array of strings words. All the strings of words are of the same length.
// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.
// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.


// Example 1:
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]

// Explanation:
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
    if (!s || words.length === 0) return [];

    let wordLen = words[0].length;
    let numWords = words.length;
    let windowSize = wordLen * numWords;
    let wordCount = new Map();

    // Build frequency map of words
    for (let word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    let result = [];

    // Check each possible starting index
    for (let i = 0; i <= s.length - windowSize; i++) {
        let seenWords = new Map();
        let j = 0;

        // Check if the substring is a valid concatenation
        while (j < numWords) {
            let wordStart = i + j * wordLen;
            let word = s.substring(wordStart, wordStart + wordLen);

            if (!wordCount.has(word)) break; // If word is not in words[], stop checking

            seenWords.set(word, (seenWords.get(word) || 0) + 1);

            if (seenWords.get(word) > wordCount.get(word)) break; // If word count exceeds required, stop

            j++;
        }

        if (j === numWords) result.push(i); // If all words matched, store index
    }

    return result;
}


module.exports = findSubstring



const s = 'barfoothefoobarman'
const words = ["foo", "bar"]
console.log(findSubstring(s, words))