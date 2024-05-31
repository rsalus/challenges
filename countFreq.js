/*

The time complexity is O(n), where n is the length of the array. 
The space complexity is also O(n) in the worst case (all unique elements).

Explanation:

    Creates a Map to store element-frequency pairs.
    Iterates over each element (elem) in the array (arr).
    If elem is not in the map, it's added with a frequency of 1.
    If elem is already in the map, its frequency is incremented by 1.

*/

function countFrequencies(arr) {
    const frequencyMap = new Map();
    for (const elem of arr) 
    {
        frequencyMap.set(elem, (frequencyMap.get(elem) || 0) + 1);
    }
    return frequencyMap;
}

const arr = [1, 2, 2, 3, 1, 4, 1];
const frequencies = countFrequencies(arr);

// Print frequencies (choose the method based on whether your frequencies are a Map or object)
// Example for Map:
if (frequencies instanceof Map) {
    for (const [element, frequency] of frequencies) {
        console.log(`${element}: ${frequency}`);
    }
} else { // Example for Object
    for (const element in frequencies) {
        console.log(`${element}: ${frequencies[element]}`);
    }
}