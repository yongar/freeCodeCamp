/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var quotient = 4.4 / 2.0;
console.log(quotient);

var remainder = 11 % 3;
console.log(remainder);


function convertToF(celsius) {
    var fahrenheit;
    // Only change code below this line
    var fahrenheit = celsius * (9 / 5) + 32


    // Only change code above this line
    return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);

console.log(convertToF(54));

// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

    // Only change code below this line.

    if (wasThatTrue) {
        return ourTrueOrFalse(true);
    } else
    {
        return ourTrueOrFalse(false);
    }

    // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));