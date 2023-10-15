let oldBread = 15;

let breadPrice = 3.49;

let regularPrice = oldBread * breadPrice;

let discountPrice = (regularPrice * 60)/100;

let totalPrice = regularPrice - discountPrice;

console.log (' Input = ' + oldBread + "\n", 'Regular price = ' + regularPrice.toFixed(2) + '€' + "\n", 'Discount =' + discountPrice.toFixed(2) + '€' + "\n", 'Total price =' + totalPrice.toFixed(2) + '€');


