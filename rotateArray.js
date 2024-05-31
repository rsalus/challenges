/*
https://leetcode.com/problems/rotate-array/
O(n)
O(1)
*/

function rotate(nums, k) {
    k %= nums.length;  // Ensure k is within the array's bounds

    reverse(nums, 0, nums.length - 1);   // 1. Reverse entire array
    reverse(nums, 0, k - 1);             // 2. Reverse first k elements
    reverse(nums, k, nums.length - 1);   // 3. Reverse remaining elements

    // Helper function to reverse a portion of the array
    function reverse(nums, start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap
            start++;
            end--;
        }
    }
}

// Use deque (doubly linked list)
// This allows for efficient insertions and deletions on both ends of the array
function rotateDeque(nums, k) {
    k %= nums.length;

    // Use the original array as a deque (in-place modification)
    const deque = nums; 

    // Rotate more efficiently by slicing and concatenating
    nums.splice(0, 0, ...deque.splice(-k)); 
};

let nums = [1,2,3,4,5,6,7]
let nums2 = [1,2,3,4,5,6,7]

console.log(nums)
rotate(nums, 3)
console.log(nums)

console.log(nums2)
rotateDeque(nums2, 3)
console.log(nums2)