// return the largest prime factor of a given number
// example number is 12 find the largest factorial of 12
// divide 12 by the smallest prime number which is 2, 12/2 = 6
// keep dividing the answer by 2, 6/2 = 3
// we cannot completely divide 3/2, so now add 1 to the divisor (2 +1) and divide again
// 3/3 = 1, we have reached the end and got our anser 2 * 2 * 3 = 12, of which 3 is the largest, so the answer is 3.

let divisor = 2;
let number = 600851475143;

while(number > 1) {
    if(number % divisor === 0) {
        number /= divisor;
    } else {
        divisor++;
    }
}
console.log('largest factorial of 600851475143:', divisor);

