/* https://leetcode.com/problems/two-sum/ */
/* O(n) Runtime: 109 ms, faster than 49.79% */
/* O(n) Memory Usage: 41.3 MB, less than 18.32% */

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

/*
    Given an array of numbers, return the two indices of the numbers that sum up to the target.
    Solution: One-Pass Hash
        Create a hash map and iterate through nums.
        Compare number to hashmap; if in hashmap, return index
        Otherwise, add value to hashmap
*/

/*
Runtime: 1 ms, faster than 99.66%
Memory Usage: 39.6 MB, less than 56.83%

    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hash = new HashMap<>();
        
        for(int i = 0; i < nums.length; i++){
            int curr = target - nums[i];
            if(hash.containsKey(curr))
                return new int[] {hash.get(curr), i};
            hash.put(nums[i], i);
        }
        return null;
    }
*/