let a1="qeweqqaswedrdersfeewtewwiseafdyervl".split("");
let a2="wdavlhpiglb".split("");
let a3="wlhpilb".split("");

// console.log(a1);
// console.log(a2);
// console.log(a3);

let s1 = new Set(a1);
let s2 = new Set(a2);
let s3 = new Set(a3);

// console.log(s1);
// console.log(s2);
// console.log(s3);

let filtered = new Set(a1.filter(e => a2.includes(e) && a3.includes(e)));

// a1.forEach(e => console.log(e));

// console.log(filtered);


//// ////  //// ////  //// ////  //// ////  //// ////  //// ////  //// ////  
//// ////  //// ////  //// ////  //// ////  //// ////  //// ////  //// ////  


// BRACKETS


let input = '(()())';
// let input = '(())()';
// let input = '((()))';
// let input = '())';
// let input = '))((';

function checkIt(inp) {
    
    let sequence = [];

    for (c of inp) {
        if(c === "(" || c=== ")") sequence.push(c);
    }

    let count = sequence.length;
    // if(sequence.length % 2 !== 0) return false;

    while (count > 0) {

        for (let i = 0; i < sequence.length -1; i++) {
            
            if((sequence[i] === "(") && (sequence[i+1] === ")")) {
                sequence.splice(i,2);
            }
        }
        count--;
    }
        
    if(sequence.length === 0) return "all ok";
    return false;
    
}


//  ROMANS


console.log(checkIt(input));

input = 1988;
console.log(convert(input))   

function convert (date) {
    if(isNaN(date) || (date % 1 !== 0) || (date < 0) || (date > 4000)) return false;
    let inp = Array.from(date.toString().split("").map(e => Number(e)));

    while (inp.length < 4) {inp.unshift(0);}

    let units = ["","I","II","III","IV","V","VI","VII","VIII","XI"];
    let tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let thousands = ["","M","MM","MM","MMMMM"];
    
    return thousands[inp[0]]+hundreds[inp[1]]+tens[inp[2]]+units[inp[3]];
}

