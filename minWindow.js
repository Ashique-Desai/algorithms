// 76. Minimum Window Substring https://leetcode.com/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-interview-150


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    if (t.length > s.length) return "";

    let charCount = new Map();
    for (let char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let left = 0, right = 0;
    let requiredChars = charCount.size;
    let formed = 0;
    let windowCount = new Map();
    let minLen = Infinity, minLeft = 0, minRight = 0;

    while (right < s.length) {
        let char = s[right];
        windowCount.set(char, (windowCount.get(char) || 0) + 1);

        if (charCount.has(char) && windowCount.get(char) === charCount.get(char)) {
            formed++;
        }

        while (formed === requiredChars) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minLeft = left;
                minRight = right;
            }

            let leftChar = s[left];
            windowCount.set(leftChar, windowCount.get(leftChar) - 1);

            if (charCount.has(leftChar) && windowCount.get(leftChar) < charCount.get(leftChar)) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return minLen === Infinity ? "" : s.substring(minLeft, minRight + 1);
}


const s = "ADOBECODEBANC", t = "ABC"
// expected Output: "BANC"

minWindow(s, t)