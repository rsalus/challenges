/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */
/* O(n) Runtime: 175 ms, faster than 10.20% */
/* O(1) Memory Usage: 48.2 MB, less than 97.22% */

function buySellStock(prices) {
    let min = Number.MAX_VALUE;
    let max = 0;

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min)
            min = prices[i];
        else    // calculate price for current day against curr max
            max = Math.max(max, prices[i] - min);
    }
    return max;
}

console.log(
    buySellStock([7, 1, 5, 3, 6, 4])
);