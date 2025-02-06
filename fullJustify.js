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

// solution from leetcode
function fullJustify(words, maxWidth) {
    let left = 0;
    const result = [];
    
    while (left < words.length) {
        const right = findRight(left, words, maxWidth);
        result.push(justify(left, right, words, maxWidth));
        left = right + 1;
    }
    
    return result;
}

function findRight(left, words, maxWidth) {
    let right = left;
    let sum = words[right++].length;
    
    while (right < words.length && (sum + 1 + words[right].length) <= maxWidth) {
        sum += 1 + words[right++].length;
    }
    
    return right - 1;
}

function justify(left, right, words, maxWidth) {
    if (right === left) {
        return padResult(words[left], maxWidth);
    }
    
    const isLastLine = right === words.length - 1;
    const numSpaces = right - left;
    const totalSpace = maxWidth - wordsLength(left, right, words);
    
    const space = isLastLine ? " " : blank(Math.floor(totalSpace / numSpaces));
    let remainder = isLastLine ? 0 : totalSpace % numSpaces;
    
    let result = "";
    for (let i = left; i <= right; i++) {
        result += words[i];
        if (i < right) {
            result += space;
            if (remainder-- > 0) {
                result += " ";
            }
        }
    }
    const paddedResult = padResult(result.trim(), maxWidth)
    console.log({result, paddedResult})
    return padResult(result.trim(), maxWidth);
}

function wordsLength(left, right, words) {
    let wordsLength = 0;
    for (let i = left; i <= right; i++) {
        wordsLength += words[i].length;
    }
    return wordsLength;
}

function padResult(result, maxWidth) {
    return result + blank(maxWidth - result.length);
}

function blank(length) {
    return " ".repeat(length);
}

// Example usage
const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
console.log(fullJustify(words, maxWidth));








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


// other attempts after the above (These were done independently)

//  var fullJustify = function(words, maxWidth) {
//     // go with a 2 pointer approach, 
//     let curr = 0;   
//     let temp = []
//     let result = []
//     let wordCount = 0
//     while (words.length > 0) {
//         wordCount += words[0].length + 1
//         if(wordCount < maxWidth) {
//             // remove next work from array and add to temp
//             const addWord =  words.shift();
//             console.log({curr, addWord})
//             temp.push(addWord,'')
//             curr += 1; 
//             console.log('in if',{wordCount})
//         } else {
//             temp.pop() // remove trailing space
//             result.push([temp.splice(0, temp.length)])
//             wordCount = 0
//             console.log('in else, result:',result.flat())
//         }
        
       
       
//     } 
    
//     console.log('at end',{temp, words, result}, "temp.length:", temp.length) 
   
// };
 
 
 // while (words.length > 0)  {        
    //     // tackle the problem in 2 parts, first just get the words which should be in one line or a single string
    //     // after that we will solve the adding adequate space etc seperately
    //     // solving for the correct splitting of words
    //     let WordCount = words[curr].length; // length of 1st word      
    //     let temp = [];
    //     const startWord =  words.splice(curr, 1);
    //     temp.push(words.splice(curr, 1)) // add curr word (first word when starting a line)       
    //     while(WordCount <= maxWidth && next < words.length) {        
    //         WordCount += words[next].length
    //         const nextWord =  words.splice(next, 1); // remove next word from words array
    //         temp.push(nextWord) // add next word and so on
    //         next +=1;            
    //     }
       
    //     // reset everything for the next line, ex: the curr shall be the word after the last word in prev line
    //     if(next < words.length) { // need this if to keep within bounds
    //         curr = next; 
    //         next = curr + 1;           
    //         temp = [] // empty temp          
    //         WordCount = words[curr].length; // reset, length of 1st word, + 1 for space after 
    //     }    
    // }