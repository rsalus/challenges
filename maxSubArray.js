/* https://leetcode.com/problems/maximum-subarray/ */
/* O(n) Runtime: 84 ms, faster than 66.66% */
/* O(n) Memory Usage: 48.7 MB, less than 16.86% */

function maxSubArray(array) {
    let curr = 0, largest = array[0];

    for(let number of array){
        curr = Math.max(0, (curr + number));
        largest = Math.max(largest, curr);
    }

    if(largest == 0){
        if(allNegative(array)){
            for(let number of array)
                largest = Math.max(largest, number);
        }
    }

    function allNegative(arr) {
        for(let i = 0; i < arr.length; i++){
            if(array[i] > 0)
                return false;
        }   return true;
    }

    return largest;
}

/*  if input is arrays
function maxSubArray(arr) {
    return arr.map(function(group) {
        return group.reduce(function(prev, current) {
            return current > prev ? current : prev;
        });
    });
}
*/

console.log(
    maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);