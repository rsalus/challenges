function mergeSort(arr) {
    if (arr.length <= 1) {  
        return arr; // Base case: already sorted
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right)); // Recursive calls
}

function merge(left, right) {
    let sortedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) 
    {
        if (left[leftIndex] < right[rightIndex])
        {
            sortedArr.push(left[leftIndex]);
            leftIndex++;
        } 
        else 
        {
            sortedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sortedArr
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}
