'use strict';

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
// const dogYears = alert(10.5 * 2 + (humanYears - 2) * 4);
// let dogYears;

// if (humanYears < 2) {
//     let dogYears = humanYears * 2;
// } else if (humanYears < 0) {
//     prompt('Please enter a number greater than 0');
// } else {
//     let dogYears = 10.5 * 2 + (humanYears - 2) * 4;
// }

// const conversionYears = alert(
//     `${humanYears} human years = ${dogYears} dog years.`
// );
