/*
Consider the software that runs on a self-checkout machine.  
One task that it must be able to perform is to determine how much change to provide when the shopper
pays for a purchase with cash.  
Write a program that begins by reading a number of cents from the user as an integer.  
Then your program should compute and display the denominations of the coins that should be used
to give that amount of change to the shopper.  
**The change should be given using as few coins as possible.**  
Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.
*/

// 742 cents 
let changeInCents = 742;
let toonie = 200;

if ( currentChange => toonie) {
  let currentChange = changeInCents / toonie;
  let coinToPrint = Math.trunc(currentChange);
  let nextChange = changeInCents % toonie;
  console.log(" Toonie 200:")
  console.log(coinToPrint);
}


let Loonie = 100;
if (nextChange => Loonie) {
  currentChange = nextChange / Loonie;
  coinToPrint = Math.trunc(currentChange);
  nextChange = nextChange % Loonie;
  console.log("Loonie 100:")
  console.log(coinToPrint);
}

let Quarter = 25;
if (nextChange => Quarter) {
  currentChange = nextChange / Quarter;
  coinToPrint = Math.trunc(currentChange);
  nextChange = nextChange % Quarter;
  console.log("Quarter 25:")
  console.log(coinToPrint);
}


let Dime = 10;
if (nextChange => Dime) {
  currentChange = nextChange / Dime;
  coinToPrint = Math.trunc(currentChange);
  nextChange = nextChange % Dime;
  console.log("Dime 10:")
  console.log(coinToPrint);
}


let Nickel = 5;
if (nextChange => Nickel) {
  currentChange = nextChange / Nickel;
  coinToPrint = Math.trunc(currentChange);
  nextChange = nextChange % Nickel;
  console.log("Nickel 5:")
  console.log(coinToPrint);
}


let Penny = 1;
if (nextChange => Penny) {
  currentChange = nextChange / Penny;
  coinToPrint = Math.trunc(currentChange);
  nextChange = nextChange % Penny;
  console.log("Penny 1:")
  console.log(coinToPrint); 
}
