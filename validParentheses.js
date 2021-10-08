/* https://leetcode.com/problems/valid-parentheses/ */

function validParentheses(str) {
    let regex = /\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)/g;
    return regex.test(str);
}

console.log(
    validParentheses("(])[]{}")
);