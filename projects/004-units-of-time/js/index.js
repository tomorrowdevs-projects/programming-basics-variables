let ask_days = prompt("Inserisci i giorni: ");
let ask_hours = prompt("Inserisci le ore: ");
let ask_minutes = prompt("Inserisci i minuti: ");
let ask_seconds = prompt("Inserisci i secondi: ");


function resultSeconds (ask_days, ask_hours, ask_minutes, ask_seconds) {
    return((ask_days*86400)+(ask_hours*3600)+(ask_minutes*60)+(ask_seconds*1));
}



console.log(resultSeconds(ask_days, ask_hours, ask_minutes, ask_seconds));


