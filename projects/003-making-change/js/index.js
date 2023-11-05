alert("INSERIRE I CONTANTI")
let pagamento = prompt("QUANTI DOLLARI HAI INSERITO?")
let centesimitotali = pagamento*100
let valore1toonies= 200

let tooniesdiresto = Math.floor(centesimitotali/valore1toonies)


let centesimirimanentidopotoonies = centesimitotali-(tooniesdiresto*valore1toonies)

let valore1loonies = 100

let looniesdiresto = Math.floor(centesimirimanentidopotoonies/valore1loonies)


let centesimirimanentidopoloonies = centesimitotali-(tooniesdiresto*valore1toonies)-(looniesdiresto*valore1loonies)

let valore1quarters = 25

let quartersdiresto = Math.floor(centesimirimanentidopoloonies/valore1quarters)



let centesimirimanentidopoquarters = centesimitotali-(tooniesdiresto*valore1toonies)-(looniesdiresto*valore1loonies)-(quartersdiresto*valore1quarters)

let valore1dimes = 10

let dimesdiresto = Math.floor(centesimirimanentidopoquarters/valore1dimes)

let centesimirimanentidopodimes = centesimitotali-(tooniesdiresto*valore1toonies)-(looniesdiresto*valore1loonies)-(quartersdiresto*valore1quarters)-(dimesdiresto*valore1dimes)

let valore1nickels = 5

let nickelsdiresto = Math.floor(centesimirimanentidopodimes/valore1nickels)


let centesimirimanentidoponickels = centesimitotali-(tooniesdiresto*valore1toonies)-(looniesdiresto*valore1loonies)-(quartersdiresto*valore1quarters)-(dimesdiresto*valore1dimes)-(nickelsdiresto*valore1nickels)

let valore1penny = 1

let pennydiresto = Math.floor(centesimirimanentidoponickels/valore1penny)


console.log(tooniesdiresto+" toonies")
console.log(looniesdiresto+" loonies")
console.log(quartersdiresto+" quarters")
console.log(dimesdiresto+" dimes")
console.log(nickelsdiresto+" nickels")
console.log(pennydiresto+" penny")
