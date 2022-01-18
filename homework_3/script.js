let firstNum = prompt("Enter first number", "");
let secondNum = prompt("Enter second number", "");

console.log("First number: " + firstNum);
console.log("Second number: " + secondNum);
(firstNum < secondNum) ? console.log("The second number is more: " + secondNum) : console.log("The first number is more: " + firstNum);

/*************************************************/

let num = prompt("Enter number", ""); 
console.log("Number: " + num);
((num % 10) % 2 == 0) ? console.log("The last number is even: " + (num % 10)) : console.log("The last number is odd: " + (num % 10));

/*************************************************/

let userName = prompt("Your name?", "");
let userAge = prompt("How old are you?", "");
let alcohol = confirm("Do you drink alcohol?");

if (alcohol) {
    if (userAge < 18) {
        console.log("Do not drink!");
    } else if (userAge > 40) {
        console.log("Do not abuse.");
    } else {
        console.log("Just don't mix vodka with beer.");
    }
} else {
    console.log("Keep it up, " + userName + "!");
}