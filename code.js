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
