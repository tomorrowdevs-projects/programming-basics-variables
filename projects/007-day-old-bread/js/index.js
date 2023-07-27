'use strict';

/*Day Old Bread

1) A bakery sells loaves of bread for €3.49 each.

2)Day old bread is discounted by 60 percent.

3)Write a program that begins by reading the number of loaves of day-old bread being purchased from the user. Then your program should display:

  3.1) Regular price for the bread
  3.2) Discount because it is a day old
  3.3) Total price
Each of these amounts should be displayed on its own line with an appropriate label. 

4) All the values should be displayed using two decimal places, and the decimal points in all the numbers should be aligned when reasonable values are entered by the user.

*/

const unitPriceBread = 3.49;
const numberLoaves = parseFloat(
    prompt('How many loaves of bread do you wish to purchase?')
);

// Total bread price
const purchasedBreadPrice = numberLoaves * unitPriceBread;

// Discount because it is one day old
// Added the toFixed(2) method to have only two decimal numbers
const discountPrice = (((numberLoaves * unitPriceBread) / 100) * 60).toFixed(2);

// Total price
const totalPrice = (
    numberLoaves * unitPriceBread -
    ((numberLoaves * unitPriceBread) / 100) * 60
).toFixed(2);

// Stored const numberLoaves in a new variable to avoid the prompt
const userNumberLoaves = numberLoaves;

const totalAmounts = alert(`Input = ${userNumberLoaves}€
Regular price = ${numberLoaves * unitPriceBread}€
Discount = ${(((numberLoaves * unitPriceBread) / 100) * 60).toFixed(2)}€
Total price = ${(
    numberLoaves * unitPriceBread -
    ((numberLoaves * unitPriceBread) / 100) * 60
).toFixed(2)}€`);
