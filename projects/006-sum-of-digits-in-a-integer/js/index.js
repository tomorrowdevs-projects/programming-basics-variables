const fourDigit = prompt("Insert the 4-digit Number");

let firstNum = Math.floor(fourDigit / 1000);
let secondNum = Math.floor((fourDigit % 1000) / 100);
let tirdNumber = Math.floor((fourDigit % 100) / 10 );
let lastNumber = fourDigit % 10;
//console.log(firstNum);
//console.log(secondNum);
//console.log(tirdNumber);
//console.log(lastNumber);

const sumFourDigit = firstNum + secondNum + tirdNumber +lastNumber;

console.log(sumFourDigit); 