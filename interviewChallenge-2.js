

// find unique pairs, in the phone key pad 2 a, b, c, 3 has d,e,f, find unique pairs of both these characters.
// this question was asked to me iun interview by Mr.Kartik,  ZineIQ, singapore gov project 
// it could simply be solved with 2 loops, I tried to solve it in a complicated way as i was trying to get all combinations, duplets, triplets and more.
const createCombinations = () => {
    const nums = [1, 2]; // hard coded for now
    const numCharPairs = {
        1: ['a', 'b', 'c'],
        2: ['d', 'e', 'f'],
    }

    const allCharacters = nums.flatMap((num) => numCharPairs[num]); // extract all Characters
    console.log('allCharacters', allCharacters);

    let combinations = [];
    for (let i = 0; i < allCharacters.length; i++) {
        for (let j = i + 1; j < allCharacters.length; j++) {
            combinations.push([allCharacters[i], allCharacters[j]]);
        }
    }

    console.log('combinations', combinations);
    return combinations;
}

createCombinations();





// find all combinations of given key pad alphabets, i tried to solve the questions with this approach in the interview.

// note: this function gives all unique combinations single, double, triplets and so on
const createCombinations1 = () => {

    const nums = [1, 2]; // hard coded for now

    const numCharPairs = {
        1: ['a', 'b', 'c'],
        2: ['d', 'e', 'f'],
    }

    const allCharacters = nums.flatMap((num) => numCharPairs[num]); // extract all Characters

    console.log('allCharacters', allCharacters)
    // iterate on the arr holding the sequences
    let combinations = [[]]; // store all combinations
    for (const char of allCharacters) {
        let currentCombination = [];
        for (const subset of combinations) {
            // create unique combinations like: [] a, b, [a, b] ...
            currentCombination.push([...subset, char]);
        }
        combinations = combinations.concat(currentCombination); // merge currentCombinations to combinations array
    }
    // we want only pair of 2, we do not need triplets etc, but this gives all possible combinations
    return combinations;
}

// console.log(createCombinations());// [2, 3]
