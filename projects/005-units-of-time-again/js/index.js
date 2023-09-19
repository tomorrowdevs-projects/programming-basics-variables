/*
In this exercise you will reverse the process described in Exercise 4.  
Develop a program that begins by reading a number of seconds from the user.  
Then your program should display the equivalent amount of time in the form D:HH:MM:SS,  
where D, HH, MM, and SS represent days, hours, minutes and seconds respectively.  
The hours, minutes and seconds should all be formatted so that they occupy exactly two digits.  
Use your research skills determine what additional character needs to be included in the format specifier
so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.
*/

//Example: 93397  
//const second = 93397;
const second = prompt("Enter the total amount of Second:");


const days = Math.floor(second /(24 * 3600));
console.log(days + " Days");

const remaingSec = second % (24 * 3600);
const hour = remaingSec / 3600;
const hours = Math.floor(remaingSec / 3600);
console.log(hours + " Hours");

const remaingSecond2 = remaingSec % 3600;
const minuts = Math.floor(remaingSecond2 / 60);
console.log(minuts + " Minutes");

const remaingSecond3 = remaingSecond2 % 60;
console.log(remaingSecond3 + " Second");

const formattedTime = `${days}d:${hours}h:${minuts}m:${remaingSecond3}s`;

console.log(formattedTime);






