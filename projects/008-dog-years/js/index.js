'use strict';

/*
DOG YEARS

1) Usually 1 human years = 7 dog years;

2) First 2 human years = 10.5 dog years each and the other human years = 4 dog years each

3) Convert human years in dog years
  3.1) human years < 2
  3.2) human years is a negativ number
  3.3) human years >= 2
  
*/

const humanYears = parseFloat(prompt('Enter your age or any number'));

// Use multiple ternary operator to annidate all the possibilities
const dogYears =
    humanYears === 2
        ? humanYears * 10.5
        : humanYears === 1
        ? humanYears * 10.5
        : humanYears < 0
        ? prompt('Please enter a number greater than 0')
        : humanYears === 0
        ? 0
        : 10.5 * 2 + (humanYears - 2) * 4;

const conversionYears = alert(
    `${humanYears} human years = ${dogYears} dog years.`
);
