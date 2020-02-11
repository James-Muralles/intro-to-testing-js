// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined || typeof input == 'boolean') {
        return "Hello, World!"
    }
    else {
        return ("Hello, " + input + "!")
    }

}

function isFive (input) {
return parseFloat(input) === 5;
}

function isEven(input){
    return parseFloat(input) % 2 === 0;

}
 function isVowel (input){
     return "aeiouAEIOU".indexOf(input) !== -1;
 }

function add(a, b) {
    return parseFloat(a) + parseFloat(b) ? parseFloat(a) + parseFloat(b) : NaN
    // if (a + b === -12) {
    //
    //     return -12;
    // } else if (a + b === 5) {
    //     return 5
    // }
    // else if (isNaN(a + b)) {
    //     return NaN
    //
    // }
    // else if (parseFloat(a) + b) {
    //     return 11
    // }
}