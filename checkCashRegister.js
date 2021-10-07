/* Design a cash register drawer function that accepts purchase price as the first argument (price), 
   payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
   submitted to freecodecamp.org's course on javascript */

function checkCashRegister(price, cash, cid){
    const currencyMap = {
        "ONE HUNDRED": 100.00, "TWENTY":20.00, "TEN":10.00,
        "FIVE":5.00, "ONE":1.00, "QUARTER":0.25,   
        "DIME":0.10, "NICKEL":0.05, "PENNY":0.01
    }
    let register = {
        status: "OPEN",
        change: [] 
    }
    //NO CHANGE CASE 
    if(price === cash || price > cash) return register; 
    
    //CALCULATE TOTAL FUNDS IN REGISTER
    let funds = 0;
    for(let i = 0; i < cid.length; i++)
        funds += cid[i][1];

    //NORMAL CASES
    if(funds < (cash - price))
        register.status = "INSUFFICIENT_FUNDS";
    else if(funds == (cash - price)){
        register.status = "CLOSED";
        register.change = [...cid];
    }
    else{
        const keys = Object.keys(currencyMap);
        let curr = (cash - price);
        let k = keys.length - 1;
        let change = [];

        //ASSIGN CHANGE BY HIGHEST VALUE
        for(let index of keys){
            let digit = Math.floor(curr / currencyMap[index]);
            let value = currencyMap[index] * digit;
            if(value > cid[k][1])
                value = cid[k][1];
            if(value > 0)
                change.push([index, value]);
            curr = (curr - value).toFixed(2);
            k--;
        }

        //EDGE CASE FOR INEXACT CHANGE 
        let check = 0;
        for(let i = 0; i < change.length; i++)
            check += change[i][1];
        
        if(check < (cash - price)){
            register.status = "INSUFFICIENT_FUNDS";
            change = [];
        }
        register.change = change;
    }
    return register;
}

console.log(
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], 
    ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
)