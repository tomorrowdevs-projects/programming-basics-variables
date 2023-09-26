<!-- In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them.  
In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit,
and drink containers holding more than one liter have a $0.25 deposit.  
Write a program that reads the number of containers of each size from the user.
Your program should continue by computing and displaying the refund that will be received for returning those containers.
Format the output so that it includes a dollar sign and two digits to the right of the decimal point. -->

<?php

$total_refunds = 0;
$repeat = true;

function ask_for_container(&$total)
{

    $is_one_liter = (string)readline('Your container holds more than 1 liter? Answer with "true" or "false": ');

    if ($is_one_liter === "true") {

        $total += 0.25;
    } else if ($is_one_liter === "false") {

        $total += 0.10;
    } else {

        echo "You have to answer with 'true' or 'false': ";
    }
}

ask_for_container($total_refunds);

while ($repeat === true) {

    $user_input = (string)readline("Do you want to add another container? Answer with 'true' or 'false': ");

    if ($user_input === "true") {
        ask_for_container($total_refunds);
    } elseif ($user_input === "false") {
        $repeat = false;
    } else {
        echo "You have to answer with 'true' or 'false'.\n";
    }
}

echo "Total refunds: $" . $total_refunds;
