/* 
A bakery sells loaves of bread for €3.49 each.  
Day old bread is discounted by 60 percent. 

Write a program that: 
- begins by reading the number of loaves of day-old bread being purchased from the user. 
- Then your program should display:   
- Regular price for the bread
- Discount because it is a day old
- Total price    
- Each of these amounts should be displayed on its own line with an appropriate label. 
- All the values should be displayed using two decimal places, 
- and the decimal points in all the numbers should be aligned when reasonable values are entered by the user.

Example:   
Input = 256   
Regular price:  893.44€  
Discount:       536.06€  
Total price:    357.38€  
*/

const prompt = require('prompt-sync')({sigint: true});

const loavesPrice = 3.49;
const discount = 0.6;
let dayOldBread;

// Using a loop to ask the user the correct desidere input until he fulffil my request
do {
    dayOldBread = Number(prompt("Quante rosette di ieri hai comprato? "));

} while ( Number.isInteger(dayOldBread) != true || dayOldBread < 0 );

// Computing the amount of money to pay based on the number of loaves purchased from the user
let regularPrice = (dayOldBread * loavesPrice).toFixed(2); // Used .toFixed() to show only two decimal places
let totalDiscount = (regularPrice * discount).toFixed(2);
let totalPrice = (regularPrice - totalDiscount).toFixed(2);

// Using the length property and the padStart() method to achieve the goal of showing all the numbers aligned
const regularPriceLength = ("Prezzo intero: " + regularPrice).length;
const totalDiscountLength = ("Sconto: " + totalDiscount).length;
const totalPriceLength = ("Prezzo scontato: " + totalPrice).length;

const regularLengthDiff = (totalPriceLength - regularPriceLength) + regularPrice.length;
const discountLengthDiff = (totalPriceLength - totalDiscountLength) + totalDiscount.length;
regularPrice = regularPrice.padStart(regularLengthDiff, " ");
totalDiscount = totalDiscount.padStart(discountLengthDiff, " ");

console.log("Prezzo intero: " + regularPrice);
console.log("Sconto: " + totalDiscount);
console.log("Prezzo scontato: " + totalPrice);