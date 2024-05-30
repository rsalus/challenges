/*
function areParenthesesBalanced(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) 
    {
        if (str[i] === "(") 
        {
            stack.push(str[i]);
        } 
        else if (str[i] === ")") 
        {
            if (stack.length > 0 && stack[stack.length - 1] === "(")
            {
                stack.pop();
            } 
            else return false;
        }
    }

    return stack.length === 0;
}
*/

// O(n), where n is length of input string str
// O(n), when the stack grows to the size of the input string str

function areParenthesesBalanced(str) {
    const stack = [];
    const openingBrackets = new Set(["(", "[", "{"]);
    const closingBrackets = new Set([")", "]", "}"]);
    const bracketPairs = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ]);

    for (const char of str) 
    {
        if (openingBrackets.has(char)) 
        {
            stack.push(char);
        } 
        else if (closingBrackets.has(char)) 
        {
            if (stack.length === 0 || stack.pop() !== bracketPairs.get(char)) 
            {
                return false;
            }
        }
    }

    return stack.length === 0; // All open brackets should be matched
}

// Example usage:
const str1 = "(()())";
const str2 = "(()))";

console.log(areParenthesesBalanced(str1));
console.log(areParenthesesBalanced(str2));