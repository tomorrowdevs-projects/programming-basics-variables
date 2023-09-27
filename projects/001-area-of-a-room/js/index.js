let lengthRoom = prompt("Inserisci la lunghezza della tua stanza in metri: ");
let widthRoom = prompt("Inserisci la larghezza della tua stanza in metri: ");

let areaRoom = +(lengthRoom * widthRoom).toFixed(8);

console.log("L'area della tua stanza è di" + " " + areaRoom);