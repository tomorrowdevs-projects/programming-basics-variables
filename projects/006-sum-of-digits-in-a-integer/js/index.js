'use strict';

/*Develop a program that reads a four-digit integer from the user and displays the sum of its digits. For example, if the user enters 3141 then your program should display 3+1+4+1=9*/

let userNumber = parseFloat(prompt('Enter a four-digit number'));

const firstNumber = Math.trunc(userNumber / 1000);

// Used remainder to calculate second, third and fourth digits
const secondNumber =
    Math.trunc(userNumber % 1000) >= 100
        ? Math.trunc((userNumber % 1000) / 100)
        : 0;

const thirdNumber =
    Math.trunc((userNumber % 1000) % 100) >= 10
        ? Math.trunc(((userNumber % 1000) % 100) / 10)
        : 0;

const fourthNumber =
    Math.trunc(((userNumber % 1000) % 100) % 10) >= 1
        ? Math.trunc((((userNumber % 1000) % 100) % 10) / 1)
        : 0;

// I stored the variable totDigits to sum the four digits
const totDigits = firstNumber + secondNumber + thirdNumber + fourthNumber;

const sumDigitsInteger = alert(
    `${firstNumber} + ${secondNumber} + ${thirdNumber} + ${fourthNumber} = ${totDigits}.`
);
