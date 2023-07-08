/* 
In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them.  
In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit,
and drink containers holding more than one liter have a $0.25 deposit.

// Programming instructions:
- Write a program that reads the number of containers of each size from the user.
- Your program should continue by computing and displaying the refund that will be received for returning those containers.
- Format the output so that it includes a dollar sign and two digits to the right of the decimal point. 
*/

let oneLiterBottles = prompt("Quante bottiglie da 1L o meno sono in tuo possesso?", "es: 1");

let moreOneLiterBottles = prompt("Quante bottiglie da più di 1L sono in tuo possesso?", "es: 1");

// Convert the input of datatype string in an input number datatype, avoiding to legitimate "x.y" input to be convert in integer numbers, using "parseInt()"
oneLiterBottles = parseFloat(oneLiterBottles);
moreOneLiterBottles = parseFloat(moreOneLiterBottles);

// Ensure that the input is an Integer positive or 0 number
if (oneLiterBottles >= 0 && moreOneLiterBottles >= 0 && Number.isInteger(oneLiterBottles) == true && Number.isInteger(moreOneLiterBottles) == true) {

    const refundTotal = (oneLiterBottles * 0.10) + (moreOneLiterBottles * 0.25);

    alert("Ti verrà riconosciuto un rimborso monetario totale di: " + refundTotal.toFixed(2) + "$"); // Using toFixed() method to format the otput with two digits to the right of the decimal point

} else {

   alert("ERRORE! INSERIRE SOLO VALORI NUMERICI! Aggiorna la pagina web e inserisci il numero di bottiglie per ciascun tipo!"); // Ask the user to refresh the program

}