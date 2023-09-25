const breadPrice = 3.49; // Regular price for loavesBread

const numLoavesBread = prompt("Insert how many Loaves Bread");

let totFullPrice =(numLoavesBread * breadPrice).toFixed(2);
let percentDiscount = (totFullPrice * 60) / 100; //discount = 60%;
let discountPrice = (totFullPrice - percentDiscount);

console.log(`Total Pices of Bread n${numLoavesBread}`);
console.log(`Regular Price: ${totFullPrice}€`);
console.log(`Total Discount(60% OFF): -${percentDiscount.toFixed(2)}€`);
console.log(`Final Price: ${discountPrice.toFixed(2)}€`)