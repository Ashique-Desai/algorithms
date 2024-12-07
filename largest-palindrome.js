// find largest palindrome

isPalindrome = (str) => {
    return str === str.split('').reverse().join("");
}

isLongestPalindrome = (str) => {
    let longest = 0;
    let longestPalindrome = '';
    for (let i = 0; i < str.length; i++) {
        const sub = str.substr(i, str.length);
        // console.log('sub', sub);
        for (let j = str.length; j >= 0; j--) {
            const sub_subs_str = sub.substr(0, j);
            // console.log('sub_subs_str', sub_subs_str);
            if (sub_subs_str.length <= 1)
                continue;

            if (isPalindrome(sub_subs_str)) {
                if (sub_subs_str.length > longest) {
                    longest = sub_subs_str.length;
                    longestPalindrome = sub_subs_str;
                }
            }
        }
    }
    return longestPalindrome;
}

console.log(isLongestPalindrome("abracadabra"));




// Define a function named is_Palindrome that checks if a given string is a palindrome
// function is_Palindrome(str1) {
//     // Reverse the string and compare it with the original string
//     var rev = str1.split("").reverse().join("");
//     return str1 == rev;
// }

// // Define a function named longest_palindrome that finds the longest palindrome in a given string
// function longest_palindrome(str1) {
//     // Initialize variables for maximum length (max_length) and corresponding palindrome (maxp)
//     var max_length = 0,
//         maxp = '';

//     // Iterate through each character in the input string
//     for (var i = 0; i < str1.length; i++) {
//         // Create a substring starting from the current character to the end of the string
//         var subs = str1.substr(i, str1.length);

//         // Iterate through each possible substring from the end of the current substring
//         for (var j = subs.length; j >= 0; j--) {
//             // Create a sub-substring from the beginning of the current substring to the current position
//             var sub_subs_str = subs.substr(0, j);
//             console.log('sub_subs_str', sub_subs_str);
//             console.log('sub_subs_str.length', sub_subs_str.length);
//             // Continue to the next iteration if the sub-substring has length 0 or 1
//             if (sub_subs_str.length <= 1)
//                 continue;

//             // Check if the sub-substring is a palindrome using the is_Palindrome function
//             if (is_Palindrome(sub_subs_str)) {
//                 // If true, check if it has a longer length than the current maximum length
//                 if (sub_subs_str.length > max_length) {
//                     // If true, update the maximum length and corresponding palindrome
//                     max_length = sub_subs_str.length;
//                     maxp = sub_subs_str;
//                 }
//             }
//         }
//     }

//     // Return the longest palindrome found
//     return maxp;
// }

// // Log the result of calling longest_palindrome with the input "abracadabra" to the console
// console.log(longest_palindrome("abracadabra"));