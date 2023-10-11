<!-- # UNITS OF TIME

Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
Compute and display the total number of seconds represented by this duration.

Example:   
- Input days: 1  
- Input hours: 10
- Input minutes: 12  
- Input seconds: 32
- Result seconds: 123152 
# Documentation
 -->

<?php

$prompt = readline("insert duration using this template d:h:m:s -> ");

function check_colons($string, $number_of_colons)
{

    $colons_counter = 0;
    $result = false;

    for ($i = 0; $i < strlen($string); $i++) {

        $string[$i] === ":" ? $colons_counter++ : "";
    }

    $colons_counter === $number_of_colons ? $result = true : $result = false;

    return $result;
}

function extract_numbers($string)
{

    $numbers = [];
    $is_latest_a_number = false;

    for ($i = 0; $i < strlen($string); $i++) {

        if (is_numeric($string[$i]) && $is_latest_a_number) {

            $last_number_index = count($numbers) - 1;
            $numbers[$last_number_index] .= $string[$i];
        } elseif (is_numeric($string[$i]) && !$is_latest_a_number) {
            $is_latest_a_number = true;
            array_push($numbers, $string[$i]);
        } else {
            $is_latest_a_number = false;
        }
    }

    return $numbers;
}

function date_into_seconds(array $numbers)
{

    $result = null;

    if (count($numbers) === 4) {
        //convert days into seconds
        $result += $numbers[0] * 24 * 60 * 60;
        //convert hours into seconds
        $result += $numbers[1] * 60 * 60;
        //convert minutes into seconds
        $result += $numbers[2] * 60;
        //add seconds
        $result += $numbers[3];
    } else {
        $result = false;
    }

    return $result;
}

if (check_colons($prompt, 3)) {
    $numbers = extract_numbers($prompt);
    $result = date_into_seconds($numbers);

    $result ? print_r($result . " seconds") : print "Wrong prompt";
} else {
    echo "Wrong prompt";
}
