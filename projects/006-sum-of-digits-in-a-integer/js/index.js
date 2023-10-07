let inputNumber = prompt ("Inserisci un numero di quattro cifre: ");


if (inputNumber.length !== 4){
    console.log ("Non hai inserito 4 cifre!");
} else {
const separateNumber = Array.from(String(inputNumber), Number);
let sumNumber = 0;

for (let i = 0; i < separateNumber.length; i++) {
    sumNumber += separateNumber[i];
}

console.log(separateNumber[0] + '+' + separateNumber[1] + '+' + separateNumber[2] + '+' + separateNumber[3] + '=' + sumNumber);
}