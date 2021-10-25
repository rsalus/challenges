/* https://leetcode.com/problems/range-sum-query-immutable/
 * O(n) Runtime: 167 ms, faster than 66.34%
 * O(n) Memory Usage: 44.5 MB, less than 98.63% */

let sum = [];

function NumArray(nums) {
    sum[0] = nums[0];
    for(let i = 0; i < nums.length; i++)
        sum[i + 1] = sum[i] + nums[i];   
}

NumArray.prototype.sumRange = function(left, right) {
    return sum[right + 1] - sum[left];
}

/*
    Given an integer array nums, handle multiple queries of the following type:
    Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
    
    Implement the NumArray class:
        NumArray(int[] nums) Initializes the object with the integer array nums.
        int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive 
            (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
*/

/*
    private int[] sum;

    public NumArray(int[] nums) {
        sum = new int[nums.length + 1];
        sum[0] = nums[0];
        for (int i = 0; i < nums.length; i++) {
            sum[i + 1] = sum[i] + nums[i];
        }
    }

    public int sumRange(int i, int j) {
        return sum[j + 1] - sum[i];
    }
*/