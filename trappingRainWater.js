
// leetcode hard problem - trapping rain water
// https://leetcode.com/problems/trapping-rain-water/solutions/5126477/video-keep-max-height-on-the-both-side/?envType=study-plan-v2&envId=top-interview-150

// attempt 2, my solution
var trap2 = function (height) {
    let left = 0;
    let right = height.length - 1;
    let water = 0;
    // intution is to figure out lower heights between 2 heights and go on expanding the middle area till we hit a higher height in between
    // below code is experimental
    while (left < right) {
        const minHeight = Math.min(height[left], height[right])
        const heightsInBetween = height.slice(left + 1, right);
        const containingWalls = heightsInBetween.map((height) => height < minHeight)
        left++
        right--
        console.log({ heightsInBetween, containingWalls })
        // will get such a matrix of true/false and can go on mvoing the pointer left/right accordingly to get the containing walls (true is water in between)
        // containingWalls: [
        //     true,  false, false,
        //     true,  false, false,
        //     false, false, false
        //   ]
    }
}

const height = [1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];  // 4, 2, 0, 3, 2, 5
trap2(height);

// my own solution, passes 125 test cases out of 300

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let volume = 0;
    let curr = 1;
    let right = 2;
    for (let i = 0; i < height.length; i++) {
        if (height[i] < 1 && i === 0) {
            console.log('skipped when left wall is 0:', height[i], { i })
            curr += 1;
            right += 1;
            continue; //skip current wall when left height is 0 i.e not a wall
        }
        while (curr < right && right < height.length) {
            // if next is water or lower wall keep incrementing pointer j till we find a wall equal to or higher than height[i]
            if (height[curr] === 0 || height[curr] < height[i]) {
                console.log('found water:')
                console.log('index left wall', i, 'index of curr wall', curr, 'right', right)
                // increment and keep going to next
                curr++;
                right++;
            }
            if (height[curr] >= height[i]) {
                // found right containing wall
                console.log('found right containing wall:')
                console.log('index left wall', i, 'index of right wall:', curr)
                // calculate water volume
                const relevantHeights = height.slice(i, curr);
                const calculateWater = relevantHeights.reduce((acc, height) => acc + (relevantHeights[0] - height), 0);
                console.log({ relevantHeights, calculateWater })
                volume += calculateWater;

                // we have found the right containing wall, to get out of while loop assign curr to right 
                right = curr; // make right the curr wall and come out of while loop to increment the i
                // now the problem is how do we increment the i which should be the right wall and how do we enter while loop
                // again (curr should be < right again)
                i = right;
                // calculatedTill = right;
                // increment right here, so that we go back in the while loop again for next calculations
                right++;
            }
            // go to the next left wall if there is no possibility of finding a containing right wall (height[i] > all height[n] on right side)
            const wallOnRight = height.slice(i + 1);
            const containingWallonRight = wallOnRight.find((h) => h >= height[i]);
            if (!containingWallonRight) {
                console.log('No containing wall on right')
                i += 1; // increment i (left wall)
                curr++;
                right++;
            }
            curr++;
            right++;
        }
    }
    return volume;
};

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

// trap(height);

