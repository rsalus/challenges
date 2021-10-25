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

/*
    public static int romanToInteger(String roman) 
    {
        Map<Character,Integer> numbersMap = new HashMap<>();
        numbersMap.put('I',1);
        numbersMap.put('V',5);
        numbersMap.put('X',10);
        numbersMap.put('L',50);
        numbersMap.put('C',100);   
        numbersMap.put('D',500);   
        numbersMap.put('M',1000);  
            
        int result=0;
            
        for(int i=0;i<roman.length();i++)
        {
        char ch = roman.charAt(i);      // Current Roman Character
        
        //Case 1
        if(i>0 && numbersMap.get(ch) > numbersMap.get(roman.charAt(i-1)))
        {
            result += numbersMap.get(ch) - 2*numbersMap.get(roman.charAt(i-1));
        }
        
        // Case 2: just add the corresponding number to result.
        else
            result += numbersMap.get(ch);
        }
            
        return result;
    }
*/