/* 
Develop a program that 
- reads a four-digit integer from the user and 
- displays the sum of its digits. 

For example, if the user enters:
3141 then your program should display 3+1+4+1=9. 
*/

const prompt = require('prompt-sync')({sigint: true}); // Add the "prompt-sync" node module to call the prompt function and use it inside the node runtime environment

//const name = prompt('What is your name? > ');
//console.log(`Hey there ${name}`);

// This block of code asks a four-digit number from the user until he does not fulfill the query
let fourDigitNumber;
do {
    fourDigitNumber = prompt("Inserisci un numero composto da 4 cifre: ");
} while (fourDigitNumber.length != 4);

// Checking if the user's input is a positive integer number
if ( Number.isInteger(Number(fourDigitNumber)) && Number(fourDigitNumber) > 0 ) {
    
    // Fetching the single character whose compose the user's input and storing each of them in a dedicate variable
    const firstDigit = Number(fourDigitNumber[0]);
    const secondDigit = Number(fourDigitNumber[1]);
    const thirdDigit = Number(fourDigitNumber[2]);
    const fourDigit = Number(fourDigitNumber[3]);

    const sumOfDigits = firstDigit + secondDigit + thirdDigit + fourDigit;

    console.log(firstDigit + "+" + secondDigit + "+" + thirdDigit + "+" + fourDigit + "=" + sumOfDigits); // Display from the terminal every character and the sum of them

} else {

    console.log("Errore!");

}