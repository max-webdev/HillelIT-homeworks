let userName = prompt("What is your name?", "");
let yearBirth = prompt("What is your year of birth?", "");
let userAge = 2022 - yearBirth;

console.log(userName, userAge);

alert("Hello, " + userName + ". You are " + userAge + " years old");

let a = prompt("Now enter variable A", "");
let b = prompt("Enter variable B", "");
let c = prompt("Variable C", "");

a = Number(a); // Reduction to a number by a function Number()
b = +b; // Reduction to a number unary plus
c = c * "1"; // Also the reduction to a number of

console.log(typeof a, typeof b, typeof c);

let sum = a + b + c;

alert("The sum of the variables A (" + a + "), B (" + b + ") and C (" + c + ") = " + sum);

alert("Even number? A (" + a + ") = " + (a % 2 == 0) + ", B (" + b + ") =" + (b % 2 == 0) + ", C (" + c + ") =" + (c % 2 == 0));

alert("Average = " + ((a + b + c)/3));