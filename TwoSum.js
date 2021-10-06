/* https://leetcode.com/problems/two-sum/ */
/* O(n^2) Runtime: 122 ms, faster than 38.88% */
/* O(1) Memory Usage: 38.9 MB, less than 97.07% */

function TwoSum(nums, target) {
    const orig = target;

    for(let i = 0; i < nums.length; i++){
        let curr = nums[i];
        target -= curr;
        
        for(let s = i+1; s < nums.length; s++){
            if(target == nums[s]) 
                return [i, s];
        } 
        target = orig;
    }
    return -1;
}

console.log(
    TwoSum([2, 5, 5, 11], 10)
);