/* https://leetcode.com/problems/two-sum/ */
/* Runtime: 109 ms, faster than 49.79% */
/* Memory Usage: 41.3 MB, less than 18.32% */

function TwoSumHash(nums, target) {
    let hash = new Map();

    for(let i = 0; i < nums.length; i++){
        let curr = target - nums[i];
        if(hash.has(curr))
            return [hash.get(curr), i];
        hash.set(nums[i], i);
    }
    return -1;
}

console.log(
    TwoSumHash([2, 5, 5, 11], 10)
)