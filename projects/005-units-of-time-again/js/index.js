'use strict';

/*
In this exercise you will reverse the process described in Exercise 4.
1)Develop a program that begins by reading a number of seconds from the user.

2)Then your program should display the equivalent amount of time in the form D:HH:MM:SS, where D, HH, MM, and SS represent days, hours, minutes and seconds respectively.

3) The hours, minutes and seconds should all be formatted so that they occupy exactly two digits.

4) Use your research skills determine what additional character needs to be included in the format specifier so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.

Example: 93397 = 1:01:56:37*/

const userSeconds = parseFloat(prompt('Enter a number'));

const getNumberDays =
    userSeconds >= 86400
        ? `${Math.trunc(userSeconds / 86400)}`
        : parseFloat('0');

const getNumbersHours = Math.trunc((userSeconds % 86400) / 3600);
if (getNumbersHours > 60) {
    Math.trunc(getNumbersHours - 60);
} else if (getNumbersHours < 10 || getNumbersHours === 0) {
    `0${getNumbersHours}`;
} else {
    getNumbersHours;
}

const getNumberMinutes = Math.trunc(((userSeconds % 86400) % 3600) / 60);
if (getNumberMinutes > 60) {
    Math.trunc(getNumberMinutes - 60);
} else if (getNumberMinutes < 10 || getNumberMinutes === 0) {
    `0${getNumberMinutes}`;
} else {
    getNumberMinutes;
}

const getNumberSeconds = Math.trunc(((userSeconds % 86400) % 3600) % 60);
if (getNumberSeconds < 10 || getNumberSeconds === 0) {
    `0${getNumberSeconds}`;
} else {
    getNumberSeconds;
}
const totalSeconds = userSeconds;
const amountTime = alert(
    `The total number of seconds entered of ${totalSeconds} is equals the following amount of time: ${getNumberDays}:${getNumbersHours}:${getNumberMinutes}:${getNumberSeconds}`
);
