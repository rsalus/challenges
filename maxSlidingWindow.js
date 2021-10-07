function maxSlidingWindow(nums, k){
    // RETURN VALUE; FASTER
    let n = nums.length;
    // k must be greater
    if (n < k) return -1;

    // Compute sum of first window of size k
    let res = 0;
    for(let i = 0; i < k; i++)
        res += nums[i];

    // Compute sums of remaining windows by
    // removing first element of previous
    // window and adding last element of
    // current window.
    let curr_sum = res;
    for(let i = k; i < n; i++){
        curr_sum += nums[i] - nums[i-k];
        res = Math.max(res, curr_sum);
    }

    return res;

    /*  RETURN WINDOW; SLOWER
    let n = nums.length;
    // Data-structure to store all
    // the sub-arrays of size K
    var vec = [];
 
    // Iterate to find all the sub-arrays
    for (var i = 0; i < n - k + 1; i++) {
        var temp = [];
 
        // Store the sub-array elements in the array
        for (var j = i; j < i + k; j++) {
            temp.push(nums[j]);
        }
 
        // Push the vector in the container
        vec.push(temp);
    }
 
    // Sort the vector of elements
    vec.sort()
 
    // The last sub-array in the sorted order
    // will be the answer
    return vec[vec.length - 1];
    */
}

console.log(
    maxSlidingWindow([5, 12, 25, 7, 9], 3)
);