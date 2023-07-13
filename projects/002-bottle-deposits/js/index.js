/* 
  In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them.  
  
  In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit,
  and drink containers holding more than one liter have a $0.25 deposit.  
  
  1-Write a program that reads the number of containers of each size from the user.
  
  2-Your program should continue by computing and displaying the refund that will be received for returning those containers.
  
  3-Format the output so that it includes a dollar sign and two digits to the right of the decimal point.
*/


let totalBottleOneLiterLess = prompt("inserisci la quantità di bottiglie =< 1l");
let totalBottleOverOne = prompt("inserisci la quantità di bottiglie > 1l")


const bottleOneLiterLess = 0.10;
const BottleOverOne = 0.25;

let priceOneLiterLess = totalBottleOneLiterLess * bottleOneLiterLess
let priceOverOne = totalBottleOverOne * BottleOverOne

console.log("Refound Bottle <= 1liter")
console.log((priceOneLiterLess) + "$")

console.log("Refound Bottle > 1liter")
console.log((priceOverOne) + "$")

console.log("Total Refound")
console.log((priceOneLiterLess + priceOverOne) + "$")
