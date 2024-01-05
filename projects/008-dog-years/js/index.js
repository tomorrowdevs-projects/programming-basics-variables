/*
It is commonly said that one human year is equivalent to 7 dog years.   
However, this simple conversion fails to recognize that dogs reach adulthood in approximately two years. 

As a result, some people believe that it is better to

- count each of the first two human years as 10.5 dog years
- and then **count each additional human year as 4 dog years 
- Write a program that implements the conversion from human years to dog years described in the previous paragraph.   
- Ensure that your program works correctly for:
- conversions of less than two human years
- conversions of two or more human years
- Your program should display an appropriate error message if the user enters a negative number.

Example:   
48 human years = 205.0 dog year
*/

const prompt = require('prompt-sync')({sigint:true}); // Added the node module to let me use the prompt function

// Declareted and assigned variables and values to manage the problem data
let humanYear;
let dogYear;
const ageThreshold = 2;
const firstAgeConversitionValue = 10.5;
const secondAgeConversitionValue = 4;

// Asking the user to insert a number, both integer or float, until he does not fulfill th query
do {
    humanYear = Number(prompt("Quanti anni umani ha il tuo cane? => "));
} while ( Number.isNaN(humanYear) ); // Using .isNaN method to be sure that only real numbers value pass this block of code

// Checking the possibles scenario
if (humanYear > 0) {

    // Dinamically control the age threshold beyond which the age conversion's value change
    if (humanYear > ageThreshold) {

        dogYear = (secondAgeConversitionValue * (humanYear - ageThreshold)) + (firstAgeConversitionValue * ageThreshold); // Dinamically computing the dog years even if the conversion's values are changed
        console.log(humanYear + " anni umani = " + dogYear + " anni canini"); // Displaing the result to the user

    } else {

        dogYear = firstAgeConversitionValue * humanYear;
        console.log(humanYear + " anni umani = " + dogYear + " anni canini");

    }

} else if (humanYear == 0) {

    console.log("O non hai un cane o hai un cucciolo! Complimenti!"); 

} else {

    console.log("ERRORE! Per favore inserire un numero positivo!"); // Displaing an error message when the number value is negative

}