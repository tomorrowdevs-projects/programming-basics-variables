let inputSec = prompt("Inserisci i secondi: ");

function convertSec (inputSec) {
    const secToDays = parseInt (inputSec/(24*3600));
    inputSec = inputSec % (24*3600);
    const secToHour = parseInt (inputSec/3600);
    inputSec %= 3600;
    const secToMinutes = parseInt (inputSec/60);
    inputSec %= 60;
    const secToSec = inputSec;

    console.log(secToDays + ":" + secToHour + ":" + secToMinutes + ":" + secToSec);
}

convertSec(inputSec);

