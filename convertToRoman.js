/* given a number, convert to equivalent in roman numerals */
/* submitted to freecodecamp.org's course on javascript */

function convertToRoman(num) {
    const numeralMap = {
        "M":    1000,
        "CM":   900,
        "D":    500,
        "CD":   400,
        "C":    100,
        "XC":   90,
        "L":    50,
        "XL":   40,
        "X":    10,
        "IX":   9,
        "V":    5,
        "IV":   4,
        "I":    1
    };
    const keys = Object.keys(numeralMap);
    let numerals = "";

    for(let index of keys){
        let digit = Math.floor(num / numeralMap[index]);
        num -= (numeralMap[index] * digit);
        numerals += index.repeat(digit);
    }

    if(num === 0) return numerals;
}

console.log(
    convertToRoman(36)
);