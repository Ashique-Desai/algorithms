// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
// For the last line of text, it should be left-justified, and no extra space is inserted between words.
// Note:
// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.
// Example 1:
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]







// this does not work yet, this is my own solution. Need to work on it again
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let resultFullJustified = [];
    let tempLine = [];
    let countChar = 0;
    for (let i = 0; i < words.length; i++) {
        countChar = words[i].length + 1;
        const currWidth = tempLine.reduce((acc, cur) => cur === '' ? acc + 1 : acc + cur.length, 0)

        if (currWidth < maxWidth) {
            tempLine.push(words[i]);
            if (i < words.length - 1) {
                tempLine.push('')
            }
            console.log('if:', { tempLine, resultFullJustified, currWidth })
        } else {
            tempLine.pop();
            tempLine.flat()
            resultFullJustified = resultFullJustified.concat(tempLine);
            temp = []; // reset temp
            i -= 1;

            console.log('else:', { tempLine, resultFullJustified, currWidth })
        }

    }
    console.log({ tempLine, resultFullJustified })

};