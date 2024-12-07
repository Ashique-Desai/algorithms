// sock merchant return number of pairs of matching socks (https://www.hackerrank.com/challenges/three-month-preparation-kit-sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-three)
// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
// Function Description
// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns
// int: the number of pairs

function sockMerchant(ar) {
    // Write your code here
    // record same color sock in an object or array
    // divide the same color sock by 2 and we have our answer use math.floor for getting whole number
    counter = 0;
    sameColorSocks = {};
    for (s of ar) {
        if (sameColorSocks[s]) {
            sameColorSocks[s] += 1;
        } else {
            sameColorSocks[s] = 1;
        }

    }
    const checkPairs = Math.floor(Object.values(sameColorSocks).reduce((accu, s) => {
        accu += Math.floor(s / 2)
        return accu
    }, 0));
    // const checkPairs = Math.floor(Object.values(sameColorSocks).reduce((accu, s) => accu += s, 0) / Object.values(sameColorSocks).length);

    console.log('sameColorSocks:', sameColorSocks);
    console.log('checkPairs:', checkPairs);
}

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
sockMerchant(ar)

