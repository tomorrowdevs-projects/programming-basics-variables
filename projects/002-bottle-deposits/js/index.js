alert("INSERISCI LE BOTTIGLIE CHE VUOI RICICLARE")

let inputmezzolitro = prompt("QUANTE BOTTIGLIE DA 0,5 LITRI HAI INSERITO?")

let inputlitro = prompt("QUANTE BOTTIGLIE DA 1 LITRO HAI INSERITO?")

let inputunlitroemezzo = prompt("QUANTE BOTTIGLIE DA 1,5 LITRI HAI INSERITO?")

let bottigliemezzolitro = parseFloat(inputmezzolitro)

let bottiglielitro = parseFloat(inputlitro)

let bottiglielitroemezzo = parseFloat(inputunlitroemezzo)

let rimborso =  (bottigliemezzolitro*0.10)+(bottiglielitro*0.10)+(bottiglielitroemezzo*0.25)

let rimborsofinale = rimborso.toFixed(2)

const simbolodollaro = "$"

let display = rimborsofinale+simbolodollaro

console.log(display)

