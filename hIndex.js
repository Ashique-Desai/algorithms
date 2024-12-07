// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
// Example 1:

// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
// https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150


/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex3 = (citations) => {
    let i = 0;

    citations.sort((a, b) => b - a); // this algorithm works because numbers are sorted in descending order, simple and beautiful, console.log to see how
    console.log('citation', citations)
    while (citations[i] > i) {
        i++;
    };

    return i;
};

const citations = [1, 3, 1]; // [3, 0, 6, 1, 5] // (output: 3) // [1, 3, 1]; // (output: 1) 
console.log(hIndex3(citations));

const hIndex2 = (citations) => {
    citations.sort((a, b) => a - b);
    console.log('citations', citations);
    let result = 0;
    for (let i = 0; i < citations.length; i++) {
        result = Math.max(result, Math.min(citations[i], citations.length - i));

    }
    return result;
};

// const citations = [1, 3, 1]; // (output: 1) // [3, 0, 6, 1, 5] (output: 3)
// console.log(hIndex2(citations));

// my own solution, May 1 2024, does not work
const hIndex = (citations) => {
    let hIndex;
    citations.sort((a, b) => b - a);
    for (c of citations) {
        hIndex = citations.filter(a => {
            return a >= c

        });
        console.log('...hIndex', ...hIndex)

        // if (hIndex.length === c) {
        //     return c;
        // }

    }
    return Math.min(...hIndex)
};
// const citations = [3, 0, 6, 1, 5] // [1, 3, 1];
// console.log(hIndex(citations));