// https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150

// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
// You are giving candies to these children subjected to the following requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children. 

// Example 1:

// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.

// Info: There are multiple implementations of candy in this file candy, candy2, candy3...


/**
 * @param {number[]} ratings
 * @return {number}
 */
// Note: the below is experimenral, it fails some tests
const candy3 = (ratings) => {
    // try to impelement candy with single loop using the valleys and peak model
    // if example: array = [3,5,2,6], 
    //   5   6   (you need to increment only peaks, if the consecutive numbers are same do not add to valley or peak)
    //  / \ /
    // 3   2

    // code:
    console.log('candy 3 peaks and valley')
    const candy = new Array(ratings.length).fill(1);
    let valley = [];
    let peaks = [];
    // left to right
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            valley.push(i - 1);
            peaks.push(i);
        }
        if (ratings[i] < ratings[i - 1]) {
            valley.push(i);
            peaks.push(i - 1);
        }
    }
    const uniquePeaks = new Set(peaks);
    console.log('valley', valley, 'peaks', peaks, 'candy', candy, 'uniquePeaks', uniquePeaks);
    [...uniquePeaks].map((e) => candy[e] += 1)
    console.log('candy', candy);
    const result = candy.reduce((acc, c) => acc + c);
    return result;
}

const ratingsArray2 = [1, 3, 2, 2, 1] // output 7  // [1, 2, 87, 87, 87, 2, 1]; // [1, 0, 2]; //[1, 3, 2, 2, 1];
console.log(candy3(ratingsArray2));


// the below solution passes all tests
const candy2 = (ratings) => {
    const candy = new Array(ratings.length).fill(1);
    // left to right 
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i - 1] < ratings[i]) {
            candy[i] = candy[i - 1] + 1;
        }
    }
    // right to left  
    for (i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candy[i] = Math.max(candy[i], candy[i + 1] + 1);
        }
    }
    return candy.reduce((a, b) => a + b, 0);
}

const ratingsArray = [1, 3, 2, 2, 1]; // expected 7

// console.log(candy2(ratingsArray));









// The below solves the problem put a few test cases fail, can work on this later (I have created this from scratch)
const candy = (ratings) => {
    // give one candy to each kid irrespective of his rating
    // check last kids candy and compare to the next kids candies, if the next kids rating is more than the previous - increment next kids candy
    let candies = {};
    for (let i = 0; i < ratings.length; i += 1) {
        candies[i] = 1;
    };
    let totalCandies = 0;

    for (let i = 0; i < ratings.length; i += 1) {
        const previousKidRating = ratings[i];
        const nextKidRating = ratings[i + 1];
        if (previousKidRating < nextKidRating) {
            candies[i + 1] += 1;
            totalCandies = Object.values(candies).reduce((accu, candy) => accu += candy);

        }
        if (previousKidRating > nextKidRating) {
            candies[i] += 1;
            totalCandies = Object.values(candies).reduce((accu, candy) => accu += candy);
        }
    }
    const sumOfUpdatedCandies = Object.values(candies).reduce((acc, candy) => {
        const updatedCandy = candy > 2 ? candy - 1 : candy;
        return acc + updatedCandy;
    }, 0)
    return sumOfUpdatedCandies;
}

const ratings = [1, 3, 2, 2, 1]; // expected 7

// candy(ratings);




