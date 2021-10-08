/* https://leetcode.com/problems/maximum-subarray/ */
/* O(n) Runtime: 84 ms, faster than 66.66% */
/* O(n) Memory Usage: 48.6 MB, less than 16.86%*/

function maxSubArray(array) {
    let curr = 0, largest = 0;

    for(let number of array){
        curr = Math.max(0, (curr + number));
        largest = Math.max(largest, curr);
    }

    if(largest <= 0){
        if(allNegative(array)){
            largest = array[0];
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

/*  if input is 2d array
function maxSubArray(arr) {
    return arr.map(function(group) {
        return group.reduce(function(prev, current) {
            return current > prev ? current : prev;
        });
    });
}

we map all items within the main array to a new array using Array.prototype.map() and 
    return this array as the final result
within each inner array, we reduce its contents down to a single value using 
    Array.prototype.reduce()
the callback function passed to the reduce method takes 
    the previous value and the current value and 
    compares the two values
if the current value is higher than the previous value
     we set it as the new previous value for comparison with the next item within the array or 
        returns it to the map method callback if it’s the last item
*/

console.log(
    maxSubArray([4, 5, 3, -4, 5, -8, -1])
);