// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function findSmallestMissingNumber(A) {
    const nums = new Set();

    // Add only positive numbers to the set
    for (const num of A) {
        if (num > 0) {
            nums.add(num);
        }
    }

    // Find the smallest missing positive integer
    let missing = 1;
    while (nums.has(missing)) {
        missing++;
    }

    return missing;
}



// second approach
function findSmallestMissingNumber(A) {
    const nums = new Set();
    const arrayLen = A.length;

    for (let i = 0; i < arrayLen; i++) {
        if (A[i] > 0) {
            nums.add(A[i]);
        }
    }

    for (let i = 1; i <= arrayLen + 1; i++) {
        if (!nums.has(i)) {
            return i;
        }
    }

    return arrayLen + 1;
}

