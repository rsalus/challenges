/* https://leetcode.com/problems/valid-parentheses/ */

function validParentheses(str) {
    let regex = /\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)/g;
    return regex.test(str);
}

console.log(
    validParentheses("(])[]{}")
);


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/*
    Runtime: 1 ms, faster than 99.17%
    Memory Usage: 37.3 MB, less than 58.94%

    public boolean isValid(String s) {
        Stack<Character> st = new Stack<>();
        for(int i = 0; i < s.length(); i++){
            char top = st.empty() ? '#' : st.peek();
            
            if(top == '(' && s.charAt(i) == ')') {
                st.pop();
            }else if(top == '{' && s.charAt(i) == '}') {
                st.pop();
            }else if(top == '[' && s.charAt(i) == ']') {
                st.pop();
            }else{
                st.push(s.charAt(i));
            }
        }
        
        return st.empty();
    }
*/