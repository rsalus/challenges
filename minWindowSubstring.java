/* https://leetcode.com/problems/minimum-window-substring/
 * O(?) Runtime: 3 ms, faster than 97.68%
 * O(?) Memory Usage: 41.1 MB, less than 36.76% */

class minWindowSubstring {
    public static String minWindow(String s, String t) {
        int start = 0, count = 0, len = s.length() + 1;
        char[] tChar = t.toCharArray();
        char[] sChar = s.toCharArray();
        int[] dp = new int[256];

        for (char c : tChar) dp[c]++;

        for (int right = 0, left = 0; right < s.length(); right++){
            if (dp[sChar[right]]-- > 0){
                count++;
            }
            while (left < right && dp[sChar[left]] < 0){
                if (++dp[sChar[left++]] > 0)
                    count--;
            }
            if (count == t.length() && right - left + 1 < len){
                start = left;
                len = right - left + 1;
            }
        }
        return len == s.length() + 1 ? "" : s.substring(start, start + len);
    }

    public static void main(String[] args){
        System.out.println(minWindow("ADOBECODEBANC", "ABC"));
    }
}

/*
    Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that 
        every character in t (including duplicates) is included in the window. 
        If there is no such substring, return the empty string "".
    The testcases will be generated such that the answer is unique.
    A substring is a contiguous sequence of characters within the string.
*/