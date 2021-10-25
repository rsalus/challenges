/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */
/* O(n) Runtime: 175 ms, faster than 10.20% */
/* O(1) Memory Usage: 48.2 MB, less than 97.22% */

function buySellStock(prices) {
    let min = Number.MAX_VALUE;
    let max = 0;

    for(let i = 0; i < prices.length; i++){
        if(min > prices[i])
            min = prices[i];
        else    // calculate price for current day against curr max
            max = Math.max(max, prices[i] - min);
    }
    return max;
}

/*
    You are given an array prices where prices[i] is the price of a given stock on the ith day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    Solution: 
        iterate through prices array, comparing price at curr index to curr min. 
            Update min if necessary.
        if curr min is lower than curr price, set max
            math.max of curr max, and price - min
*/


console.log(
    buySellStock([7, 1, 5, 3, 6, 4])
);