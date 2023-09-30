<!-- # MAKING CHANGE

Consider the software that runs on a self-checkout machine.   
One task that it must be able to perform is to determine how much change to provide when the shopper 
pays for a purchase with cash.  
Write a program that begins by reading a number of cents from the user as an integer.   
Then your program should compute and display the denominations of the coins that should be used 
to give that amount of change to the shopper.   
**The change should be given using as few coins as possible.**   
Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.

- Penny = 1 cent
- Nickel = 5 cents
- Dime = 10 cents
- Quarter = 25 cents
- Loonie = 100 cents
- Toonie = 200 cents

Example: 
742 cents = 3 toonies, 1 loonies, 1 quarters, 1 dimes, 1 nickels, 2 pennies. -->

<?php

$penny = 1;
$nickel = 5;
$dime = 10;
$quarter = 25;
$loonie = 100;
$toonie = 200;

$amount_of_penny = 0;
$amount_of_nickel = 0;
$amount_of_dime = 0;
$amount_of_quarter = 0;
$amount_of_loonie = 0;
$amount_of_toonie = 0;

function increase_decrease(&$var_to_increase, &$var_to_decrease, $decrease_amount)
{

    $var_to_increase++;
    $var_to_decrease -= $decrease_amount;
};

$products = [
    1 => 8.99,
    2 => 12.99,
    3 => 15.99
];

echo "Welcome to Mc Donald's, you can buy a Happy Meal for $8.99, a Big Mac for $12.99 and, only for big guys, a Big Tasty for $15.99. ";

$selected_product = readline("Type 1 for Happy meal, 2 for Big Mac, 3 for Big Tasty: ");

$sel_product_converted_price = $products[$selected_product] * 100;

$cash_prompt = readline("Insert amount of coins in dollars");
$cash = $cash_prompt * 100;
$change = $cash - $sel_product_converted_price;


while ($change != 0) {

    match (true) {
        $change >= $toonie => increase_decrease($amount_of_toonie, $change, $toonie),
        $change >= $loonie => increase_decrease($amount_of_loonie, $change, $loonie),
        $change >= $quarter => increase_decrease($amount_of_quarter, $change, $quarter),
        $change >= $dime => increase_decrease($amount_of_dime, $change, $dime),
        $change >= $nickel => increase_decrease($amount_of_nickel, $change, $nickel),
        $change >= $penny => increase_decrease($amount_of_penny, $change, $penny)
    };
};

echo "{$amount_of_penny} penny, {$amount_of_nickel} nickel, {$amount_of_dime} dime, {$amount_of_quarter} quarter, {$amount_of_loonie} loonie, {$amount_of_toonie} toonie.";
