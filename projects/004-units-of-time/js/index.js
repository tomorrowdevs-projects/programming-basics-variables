/*
Input days: 1
- Input hours: 10
- Input minutes: 12
- Input seconds: 32
- Result seconds: 123152
*/
//from Day to Hours
let currentDays = 1; 
const Hours = 24;
dayInHours = currentDays * Hours;
console.log(dayInHours + " hours")

//from Hours to Minutes 
let currentHours = 10 + dayInHours; 
const minutes = 60;
hoursInMinutes =  currentHours * minutes;
console.log(hoursInMinutes + " minutes")

//from Minutes to Second
let currentMinutes = 12 + hoursInMinutes; 
const secondi = 60;
minutesInSeconds =  currentMinutes * secondi;


//total Second 
currentSecond = 32;
totalSecond = minutesInSeconds + currentSecond;
console.log(totalSecond + " Total Second")