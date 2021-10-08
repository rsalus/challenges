/* given a string, return true or false if string is a palindrome */
/* submitted to freecodecamp.org's course on javascript */

function palindrome(str) {
    let mod = str.replace(/[\W_]+/g, "").toLowerCase();
    let modReverse = mod.split("").reverse().join("");

    return (mod === modReverse);
}

/*
function palindrome(String)
{
    let i = 0, j = String.length;
    while (i < j)
    {
        if (String[i] != String[j])
            return false;
             
        i++;
        j--;
    }
    return true;
}
*/

console.log(
    palindrome("eye")
);