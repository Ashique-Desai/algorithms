// https://leetcode.com/problems/longest-palindromic-substring/description/


// largest palindrome
const isPalindrome = (string) => {
    const rev = string.split('').reverse().join("");
    // console.log('rev', rev);
    return rev === string;
}


const isLargestPalindrome = (string) => {
    console.time("2 loops");
    let largestPalindrome = 0;
    let palindrome = '';
    // let count = 0;
    for (let i = 0; i < string.length; i++) {
        const sub = string.substr(i, string.length);
        for (let j = string.length; j >= 0; j--) {
            // console.log('j', j, count++)
            const subSubString = sub.substr(0, j);
            if (isPalindrome(subSubString) && largestPalindrome < subSubString.length) {
                largestPalindrome = subSubString.length;
                palindrome = subSubString;
            }
        }
    }
    console.timeEnd("2 loops");
    return palindrome;
}

console.log(isLargestPalindrome('abracadabra')); // abracadabra// output: aca



const isPalindrome2 = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

const isLargestPalindrome2 = (string) => {
    let largestPalindrome = '';
    let count = 0;

    for (let windowSize = string.length; windowSize > 0; windowSize--) {
        for (let i = 0; i <= string.length - windowSize; i++) {
            // console.log('string.length', string.length, 'windowSize', windowSize)
            // console.log('i', i, 'string.length - windowSize', string.length - windowSize)
            console.log('i', i, count++)
            const subString = string.substr(i, windowSize);
            if (isPalindrome2(subString)) {
                largestPalindrome = subString;
                return largestPalindrome;
            }
        }
    }
    return largestPalindrome;
};

// console.log(isLargestPalindrome2('abracadabra'));
































// function longestPalindrome(s) {
//     if (s.length === 0) {
//         return "";
//     }

//     let start = 0;
//     let end = 0;

//     for (let i = 0; i < s.length; i++) {
//         let len1 = expandAroundCenter(s, i, i);
//         let len2 = expandAroundCenter(s, i, i + 1);
//         let maxLen = Math.max(len1, len2);

//         if (maxLen > end - start) {
//             start = i - Math.floor((maxLen - 1) / 2);
//             end = i + Math.floor(maxLen / 2);
//         }
//     }

//     return s.substring(start, end + 1);
// }

// function expandAroundCenter(s, left, right) {
//     console.log('s[left], s[right]', s[left], s[right]);
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//         left--;
//         right++;
//     }
//     console.log('right - left - 1;', left, right, right - left - 1);
//     return right - left - 1;
// }

// // Example usage:
// // let string = "abracadabra";
// // let largestPalindrome = longestPalindrome(string);
// // console.log(`Largest palindrome in '${string}' is '${largestPalindrome}'`);
// console.log('Math.floor((maxLen - 1) / 2)', Math.floor((3 - 1) / 2))
// console.log('Math.floor(maxLen / 2)', Math.floor(3 / 2));

