'use strict';

// 1) Prompt to ask how many bottles have been entered.

const smallDrink = parseFloat(
    prompt(
        'How many bottles equal to or less than one litre did you put in the drink container?'
    )
);
const bigDrink = parseFloat(
    prompt(
        'How many bottles larger than one litre did you put in the drink container'
    )
);

// Calculate total refund and add toFixed(2) to get two decimal numbers
const totalRefundDrink = alert(
    `The total refund is $${(smallDrink * 0.1 + bigDrink * 0.25).toFixed(2)}.`
);
