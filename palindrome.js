function palindrome(str) {
    let mod = str.replace(/[\s\W_]+/g, "").toLowerCase();
    let modReverse = mod.split("").reverse().join("");

    return (mod == modReverse);
}

console.log(
    palindrome("eye")
);