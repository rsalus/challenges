function indexEqualsSum(nums) {
    // first "iteration"
    let totalSum = 0;
    for(let i = 0; i < nums.length; i++)
        totalSum += nums[i];

    for(let i = 0, leftSum = 0, rightSum = totalSum;
            i < nums.length;
            i++) { //second iteration
        rightSum -= nums[i];
        if (leftSum == rightSum) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
}

console.log(
    indexEqualsSum([2, 3, 4, 4, 1])
);