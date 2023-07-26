/* 
    1. Write a program that asks the user to enter the width and length of a room.  

    2. Once these values have been read, your program should compute and display the area of the room.

    3. The length and the width will be entered as **floating-point numbers**.

    4. Include units in your prompt and output message; either feet or meters, depending on which
    unit you are more comfortable working with.
*/

let width = prompt("Inserisci la largezza della stanza in m: ");
alert("Larghezza inserita= " + width)
width = parseFloat(width); // Convert the string type in a floating number type
// alert("Il tipo di dato inserito è: " + typeof width); // Check the rightness of the convertion

let length = prompt("Inserisci la lunghezza della stanza in m: ");
alert("Lunghezza inserita= " + length)
length = parseFloat(length); // Convert the string type in a floating number type
// alert("Il tipo di dato inserito è: " + typeof width); // Check the rightness of the convertion


// Added a control to be sure that the user input a positive number both integer or float
if ( width > 0 && length > 0 ) {

    const area = ((width * 10) * (length* 10)) / 100; // Avoid the approssimations errors

    alert("Area della stanza: " + area + "mq");

} else {

    alert("ERRORE! SONO AMMESSI SOLO NUMERI >0 ! \nAggiorna la pagina web e inserisci un valore numerico quando richiesto!");

}

