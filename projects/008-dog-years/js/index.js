let humanyears = prompt ('Quanti anni ha il tuo cane?');

let dogyears = 0;

if (humanyears <= 0) {
    alert ('Inserisci un numero positivo!');
} else if (humanyears <= 2) {
    dogyears = 10,5 * dogyears;
} else {
    dogyears = (10.5*2) + ((humanyears-2)*4);
}

console.log(dogyears.toFixed(1));

