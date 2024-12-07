// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    // record the peaks - meaning when the price of the stock goes up, example 7, 9, 3, 6... the price went up from 7 to 9 record and compute, 9 to 3 did not, so skip so on...
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            console.log('prices[i], prices[i + 1]', prices[i], prices[i + 1])
            maxProfit += prices[i + 1] - prices[i];
        }
    }
    console.log('maxProfit', maxProfit);
    return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);


