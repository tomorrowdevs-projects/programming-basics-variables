'use strict';

// Inserted parseFloat to convert string to number
const insertCoins = parseFloat(prompt('Insert  number of your coins'));

// I created a variable for simplicity in the final alert
const totalRest = insertCoins;

const penny = 1;
const nickel = 5;
const dime = 10;
const quarter = 25;
const loonie = 100;
const toonie = 200;

// Logical operator for greater simplicity and clarity of cidice than if and else
const returnToonie = insertCoins >= 200 ? Math.trunc(insertCoins / 200) : '0';

// For the other variants, I used the remainder
const returnLoonie =
    insertCoins % 200 >= 100 ? Math.trunc((insertCoins % 200) / 100) : '0';

const returnQuarter =
    (insertCoins % 200) % 100 >= 25
        ? Math.trunc(((insertCoins % 200) % 100) / 25)
        : '0';

const returnDime =
    ((insertCoins % 200) % 100) % 25 >= 10
        ? Math.trunc((((insertCoins % 200) % 100) % 25) / 10)
        : '0';

const returnNickel =
    (((insertCoins % 200) % 100) % 25) % 10 >= 5
        ? Math.trunc(((((insertCoins % 200) % 100) % 25) % 10) / 5)
        : '0';

const returnPenny =
    ((((insertCoins % 200) % 100) % 25) % 10) % 5 >= 1
        ? Math.trunc((((((insertCoins % 200) % 100) % 25) % 10) % 5) / 1)
        : '0';

const changeRestShopping = alert(
    `The customer receives a total of ${totalRest} cents in change, which equals ${returnToonie} toonies, ${returnLoonie} loonies, ${returnQuarter} quarters, ${returnDime} dimes, ${returnNickel} nickels, ${returnPenny} pennies. `
);
