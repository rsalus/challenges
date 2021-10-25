/* https://leetcode.com/problems/valid-anagram/ */
/* O(n log n) Runtime: 96 ms, faster than 64.41% */
/* O(n) Memory Usage: 44 MB, less than 30.65% */

function anagram(s, t) {
    // check if arrays have identical elements
    const equals = (a, b) => a.length === b.length && 
        a.every((val, i) => val === b[i]);
    
    return equals([...s].sort(), [...t].sort());
}

console.log(
    anagram("anagram", "nagaram")
);

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/*
    Runtime: 2 ms, faster than 96.35%
    Memory Usage: 39 MB, less than 93.47%

    public boolean isAnagram(String s, String t) {
        s = sort(s);
        t = sort(t);
        
        return s.equals(t);
    }
    public static String sort(String input){
        char[] temp = input.toCharArray();
        Arrays.sort(temp);
        return new String(temp);
    }
*/