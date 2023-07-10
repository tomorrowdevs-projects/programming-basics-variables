/* 
In this exercise you will reverse the process described in Exercise 4.  
Develop a program that 

- begins by reading a number of seconds from the user.  
- Then your program should display the equivalent amount of time in the form D:HH:MM:SS,  
where D, HH, MM, and SS represent days, hours, minutes and seconds respectively.  
- The hours, minutes and seconds should all be formatted so that they occupy exactly two digits.  
- Use your research skills determine what additional character needs to be included in the format specifier
so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.

Example: 93397  = 1:01:56:37
*/

const userSeconds = Number(prompt("Inserisci il numero di secondi da convertire: "));

let daysInSeconds = 86400;
let hoursInSeconds = 3600;
let minutesInSeconds = 60;

if (userSeconds >= 0 && Number.isInteger(userSeconds) == true) {

    let numberOfDays= userSeconds / daysInSeconds;

    numberOfDays = Math.trunc(numberOfDays).toString();
    let remainingSeconds = userSeconds % daysInSeconds;

    let numberOfHours= remainingSeconds / hoursInSeconds;

    numberOfHours = Math.trunc(numberOfHours).toString();
    remainingSeconds = remainingSeconds % hoursInSeconds;

    let numberOfMinutes= remainingSeconds / minutesInSeconds;

    numberOfMinutes = Math.trunc(numberOfMinutes).toString();
    let numberOfSeconds = (remainingSeconds % minutesInSeconds).toString();

    if (numberOfHours < 10) {

        // numberOfHours = numberOfHours.toString();
        numberOfHours = numberOfHours.padStart(2, "0");

        // numberOfHours = "0" + numberOfHours; // 

    }

    if (numberOfMinutes < 10) {

        // numberOfMinutes = numberOfMinutes.toString();
        numberOfMinutes = numberOfMinutes.padStart(2, "0");

    }

    if (numberOfSeconds < 10) {

        // numberOfSeconds = numberOfSeconds.toString();
        numberOfSeconds = numberOfSeconds.padStart(2, "0");

    }

    alert(userSeconds + " secondi " + "equivalgono a => " + numberOfDays + ":" + numberOfHours + ":" + numberOfMinutes + ":" + numberOfSeconds + "\nNel formato D:HH:MM:SS.");

} else {

    alert("ERRORE! INSERIRE UN VALORE NUMERICO COERENTE LOGICAMENTE CON QUANTO RICHIESTO! \nAggiornare la pagina web per rilanciare il programma!");

}