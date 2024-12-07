// https://leetcode.com/problems/gas-station/?envType=study-plan-v2&envId=top-interview-150

// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

// Example 1:
// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

// solution from leetcode
var canCompleteCircuit = function (gas, cost) {
    const n = gas.length;
    let totalSurplus = 0;
    let currentSurplus = 0;
    let start = 0;

    for (let i = 0; i < n; i += 1) {
        totalSurplus += gas[i] - cost[i];
        currentSurplus += gas[i] - cost[i];
        console.log({ i, totalSurplus, currentSurplus })
        if (currentSurplus < 0) {
            currentSurplus = 0;
            start = i + 1;
        }
    }
    return totalSurplus < 0 ? -1 : start;
};

const gas1 = [1, 2, 3, 4, 5]; // output 3 // [2, 3, 4] // output -1 // 
const cost1 = [3, 4, 5, 1, 2]; // [3, 4, 3] 
console.log(canCompleteCircuit(gas1, cost1))


// my solution in progress, does pass all tests yet
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit2 = function (gas, cost) {
    const n = gas.length;
    let visited = Array(gas.length).fill(0); // record if we visit this twice
    console.log({ visited })
    let tank = gas[0];
    console.log('tank 1st', tank)
    let currentIndex = 0;
    let nextIndex = 1;
    while (currentIndex !== nextIndex) {
        // check if we can go to the next gas station, if can't change the current index to next and next to next +1
        // 2 - 3 + 3

        if (tank > cost[currentIndex] || gas[currentIndex] >= cost[currentIndex]) {
            // can go to next gas station
            // console.log('tank', tank, 'cost', cost[currentIndex], 'gas[currentIndex]', gas[currentIndex])
            nextIndex += 1; // iterate only next keep current index fixed 
            if (nextIndex >= n - 1) {
                // console.log('nextIndex === n - 1', { currentIndex, nextIndex })
                nextIndex = 0; // reset next to zero, to jump from last to first           
            }
            if (currentIndex === nextIndex) {
                return currentIndex;
            } else if (visited.includes(3)) {
                return -1;
            }
            tank = gas[currentIndex] - cost[currentIndex] + gas[nextIndex];
            visited[currentIndex] += 1;
            // console.log('in if can go to next', { currentIndex, nextIndex })
        } else {
            // cannot go to the next gas station, move both current and next
            currentIndex += 1;
            nextIndex += 1;
            if (currentIndex >= n - 1) {
                nextIndex = 0; // reset next to zero, to jump from last to first           
            }
            if (currentIndex > n - 1 && nextIndex === 0) {
                // when last is current and next is first, restart from zero index to one
                currentIndex = 0
                nextIndex = 1
            }
            tank = gas[currentIndex] - cost[currentIndex] + gas[nextIndex];
            console.log('in else can not go to next', { currentIndex, nextIndex })
        }
        console.log('visted after', { visited })

    }
    return -1
};
const gas = [1, 2, 3, 4, 5]; // output 3 // [2, 3, 4] // output -1 // 
const cost = [3, 4, 5, 1, 2]; // [3, 4, 3] 
// console.log(canCompleteCircuit2(gas, cost))