// A Fibonacci series in JavaScript is written as following:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 and so on.

// As we have seen, the Fibonacci sequence is the integer sequence in which the first two terms are 0 and 1. After that, the following term is defined as the sum of the previous two terms. 
// Having this piece of information, let's start to code the Fibonacci series in JavaScript.

// The first step is to create a function that will receive the number of terms that we want to generate.
// The second step is to create a variable to store the first term, which is 0.
// The third step is to create a variable to store the second term, which is 1.
// The fourth step is to create a variable to store the next term, which is the sum of the previous two terms.
// The fifth step is to create a loop that will iterate through the number of terms that we want to generate.
// The sixth step is to print the first and second terms.
// The seventh step is to print the next term, which is the sum of the previous two terms.
// The eighth step is to update the first term with the value of the second term.
// The ninth step is to update the second term with the value of the next term.
// The tenth step is to repeat the process until we reach the number of terms that we want to generate.

let n1 = 0, n2 = 1, nextTerm;
let numberOfTerms = 10;

for(let i =0; i < numberOfTerms; i+=1) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
   
    console.log('fibonacci series:', n1);
}