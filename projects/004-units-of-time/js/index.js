/*
 Input days: 1  
- Input hours: 10
- Input minutes: 12  
- Input seconds: 32
- Result seconds: 123152 
*/

//Da GIORNI a ORE
let currentDay = 1;
if (currentDay => 1) {
    const dayHours = 24;
    dayInHours = currentDay * dayHours;
}
console.log(dayInHours + " hour")

//Da ORE a MINUTI 
let currentHours = 10;
if (currentHours => 1)
{
  const hoursMin = 60;
  hoursInMin = (dayInHours + currentHours) * hoursMin;
  console.log(hoursInMin + " min")
}

//Da MINUTI a SECONDI 
let currentMin = 12;
if (currentMin => 1)
{
  const minSec = 60; 
  minInSec = (hoursInMin + currentMin) * minSec;
 console.log(minInSec + " sec")
}

// Somma Totale dei SECONDI 
let currentSec = 32;
if (currentSec => 1) {
    totalSec = minInSec + currentSec;
console.log(totalSec + " Tot Sec");
}
