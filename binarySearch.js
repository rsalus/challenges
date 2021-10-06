/* Iterative Implementation
    Runtime: O(log n)
    Memory: O(1)
        Notes: Memory has constant(1) complexity & less than comparative recursive 
        implementation (due to latter consuming memory on the stack) */

function binarySearch(key, array) {
    //Array passed into function must be sorted
    let high = array.length;
    let low = 0;

    while(low <= high){
        //calculates mid based on index values of high and low
        let mid = low + Math.floor((high - low) / 2);

        if(array[mid] == key)
            return mid;
        else if(array[mid] > key)
            high = mid - 1;
        else if(array[mid] < key)
            low = mid + 1;
    } return -1;
}

console.log(
    binarySearch(32, [1, 2, 4, 8, 16, 32, 64, 128, 256])
);