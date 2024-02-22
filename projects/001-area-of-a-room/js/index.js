'use strict';

// Prompt gives back a string. I inserted a prompt with parseFloat
let widthRoom = parseFloat(
    prompt('Enter the width in cm of your room, please')
);

let lengthRoom = parseFloat(
    prompt('Enter the length in cm of your room, please')
);

// Without a parseFloat() result NaN
let areaRoom = alert(
    `The area of your room is ${widthRoom * lengthRoom} square centimetres.`
);
