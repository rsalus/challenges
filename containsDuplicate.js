/* https://leetcode.com/problems/contains-duplicate/ */
/* O(n) Runtime: 84 ms, faster than 75.64% */
/* O(n) Memory Usage: 45.8 MB, less than 38.62% */
/* Alternative approach is sorting, which would give O(1) for memory but O(n log n) for runtime */

function containsDuplicate(nums) {
    let hash = new Map();
    for(let e of nums){
        if(hash.has(e))
            return true;
        hash.set(e);
    } return false;
}

console.log(
    containsDuplicate([1, 2, 3, 4, 5, 4])
);