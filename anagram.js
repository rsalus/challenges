/* https://leetcode.com/problems/valid-anagram/ */
/* O(n log n) Runtime: 96 ms, faster than 64.41% */
/* O(n) Memory Usage: 44 MB, less than 30.65% */

function anagram(s, t) {
    const equals = (a, b) => a.length === b.length && 
        a.every((val, i) => val === b[i]);
    
    return equals([...s].sort(), [...t].sort());
}

console.log(
    anagram("anagram", "nagaram")
);