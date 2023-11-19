/* 
Consider the software that runs on a self-checkout machine.  
One task that it must be able to perform is to determine how much change to provide when the shopper
pays for a purchase with cash.  

- Write a program that begins by reading a number of cents from the user as an integer.  
- Then your program should compute and display the denominations of the coins that should be used
to give that amount of change to the shopper.  

- **The change should be given using as few coins as possible.**

- Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.

- Penny = 1 cent
- Nickel = 5 cents
- Dime = 10 cents
- Quarter = 25 cents
- Loonie = 100 cents
- Toonie = 200 cents

Example:
742 cents = 3 toonies, 1 loonies, 1 quarters, 1 dimes, 1 nickels, 2 pennies.
*/

let purchase = 1.85; // I arbitrarily decide the cost of the product
alert("Il prodotto scelto costa: " + purchase + "Eur");

// Declaring the type of Coins that should be used
const toonies = 200;
const loonies = 100;
const quarters = 25;
const dimes = 10;
const nickels = 5;
const pennies = 1;

const userCash = prompt("Inserire denaro: ");

// Checking the rightness of the input, relative to the scope
if (userCash >= purchase) {
    
    let change = (userCash - purchase) * 100; // Converting Eur to cents
    change = change.toFixed(); // Return an Integer value, after a rounding

    // Checking which Coins give to the user
    if (change >= toonies) {
        let currentChange = change / toonies;
        let amountOfCoin = Math.trunc(currentChange); // Extract the integer part of the value
        alert("Ti verranno restituiti: " + amountOfCoin + " toonies");

        change = change % toonies; // Computing the remaining part of "change" to give
    }

    if (change >= loonies) {
        let currentChange = change / loonies;
        let amountOfCoin = Math.trunc(currentChange);
        alert("Ti verranno restituiti: " + amountOfCoin + " loonies");

        change = change % loonies;
    }

    if (change >= quarters) {
        let currentChange = change / quarters;
        let amountOfCoin = Math.trunc(currentChange);
        alert("Ti verranno restituiti: " + amountOfCoin + " quarters");

        change = change % quarters;
    }

    if (change >= dimes) {
        let currentChange = change / dimes;
        let amountOfCoin = Math.trunc(currentChange);
        alert("Ti verranno restituiti: " + amountOfCoin + " dimes");

        change = change % dimes;
    }

    if (change >= nickels) {
        let currentChange = change / nickels;
        let amountOfCoin = Math.trunc(currentChange);
        alert("Ti verranno restituiti: " + amountOfCoin + " nickels");

        change = change % nickels;
    }
       
    if (change >= pennies) {
        let currentChange = change / pennies;
        let amountOfCoin = Math.trunc(currentChange);
        alert("Ti verranno restituiti: " + amountOfCoin + " pennies");

        change = change % pennies;
    }

} else {
    alert("ERRORE! INSERIRE UN NUMERO VALIDO DI DENARO! Aggiorna la pagina web e lancia nuovamene il programma!");
}