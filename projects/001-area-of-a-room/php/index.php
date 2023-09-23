<!-- Write a program that asks the user to enter the width and length of a room.  
Once these values have been read, your program should compute and display the area of the room.  
The length and the width will be entered as **floating-point numbers**.  
Include units in your prompt and output message; either feet or meters, depending on which
unit you are more comfortable working with. -->

<?php

do {
    $width = (float)readline('Enter width in meters, only numbers: ');
} while ($width == 0);

do {
    $length = (float)readline('Enter length in meters, only numbers: ');
} while ($length == 0);

$room_area = $width * $length;

echo "The area is " . $room_area . " meters";
