/* https://leetcode.com/problems/coin-change/
 * O(?) Runtime: 104 ms, faster than 95.47%
 * O(?) Memory Usage: 44.4 MB, less than 50.28% */

function coinChange(coins, amount) {
    // INIT dp
    let dp = [0];
    for(let i = 1; i <= amount; ++i)
        dp[i] = Number.MAX_VALUE;

    // fill dp from amount = 1 to amount's actual value
    for(let i = 1; i <= amount; ++i){
        // try to include every coin one by one
        for(let k = 0; k < coins.length; ++k){
            // if coin has value less than curr
            if(coins[k] <= i){
                // find 'cost' for amount remaining
                // ex amount = 8, coins[k] = 5, find min cost for 3 (8 - 5)
                let remainder = dp[i - coins[k]];
                // if coin gives lesser value than curr min, include it
                if(remainder != Number.MAX_VALUE && (remainder + 1) < dp[i])
                    dp[i] = remainder + 1;
            }
        }
    }

    return dp[amount] == Number.MAX_VALUE ? -1 : dp[amount];

    /*
        Now fill the array using the below loop from i=1 to the amount
        Try each coin one by one to create amount i using this coin j
        If the value of this coin is smaller or equal to i then do below else pick the next coin
        If this coin is included then the rest of the amount is i-coins[j]
        Now check if a solution exists for this amount i.e. dp[i-coins[j] != INT_MAX and including this coins gives better solution then the current one
        If yes then include this coin and replace dp[i] with new minimum value dp[i-coins[j] + 1
    */

    /* GREEDY APPROACH... non functional for certain cases
    if(amount == 0) return 0;
    if(coins.length == 1){
        if((amount % coins[0]) != 0)
            return -1;
        else return (amount / coins[0]);
    }

    let array = [...coins].sort((a, b) => b - a);
    let result = 0;
    for(let value of array){
        let digit = Math.floor(amount / value);
        amount -= (digit * value);
        result += digit;
    }   return result;
    */
}

console.log(
    coinChange([186, 419, 83, 408], 6249)
);