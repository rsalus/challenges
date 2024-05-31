/*
    https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
    O(n) Runtime: 59ms
    O(1) Memory Usage: 51.69 mb
*/

function removeDuplicates(nums) {
    let i = 0; // Pointer for the next position to insert

    for (let num of nums) {
        if (i < 2 || num > nums[i - 2]) { // Allow up to 2 duplicates
            nums[i] = num;
            i++;
        }
    }
    
    return i; // 'i' represents the new length after modification
}

let nums = [1, 1, 1, 2, 2, 3]

console.log(nums);
removeDuplicates(nums);
console.log(nums);