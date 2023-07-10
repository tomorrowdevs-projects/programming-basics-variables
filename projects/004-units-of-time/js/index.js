/* 
Create a program that:

- reads a duration from the user as a number of days, hours, minutes, and seconds.
- Compute and 
- display the total number of seconds represented by this duration.

Example:
- Input days: 1
- Input hours: 10
- Input minutes: 12
- Input seconds: 32
- Result seconds: 123152
*/

// Asking the user to insert a number and convert it from a STRING datatype to a NUMBER datatype
let days = parseFloat(prompt("Inserisci numero di giorni: "));
let hours = parseFloat(prompt("Inserisci numero di ore: "));
let minutes = parseFloat(prompt("Inserisci numero di minuti: "));
let seconds = parseFloat(prompt("Inserisci numero di secondi: "));

// Checking if the inputs are positive integers numbers
if (days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0 && Number.isInteger(days) == true &&  Number.isInteger(hours) == true && Number.isInteger(minutes) == true && Number.isInteger(seconds) == true) {
    // Computing the duration of time in seconds
    hours = (days * 24) + hours;
    minutes = (hours * 60) + minutes;

    const duration = (minutes * 60) + seconds;

    alert("Numero totale di secondi: " + duration + "!");
} else {
    alert("ERRORE! INSERISCI UN NUMERO LOGICAMENTE COERENTE CON LA RICHIESTA! \nAggiorna la pagina per lanciare nuovamente il programma!")
}