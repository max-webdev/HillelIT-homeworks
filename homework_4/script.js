// Вывести на страницу в одну строку через запятую числа от 10 до 20
let i = 10;
let str = '';
while (i <= 20) {
    if (i === 20) {
        str = str + i;
    } else {
        str = str + i + ', ';
    }
    i++;
}
console.log(str);
console.log("*************");

// Вывести квадраты чисел от 10 до 20
for (i = 10; i <= 20; i++) {
    console.log(i + '^2 = ' + i * i);
}
console.log("*************");

// Вывести таблицу умножения на 7

for (i = 1; i <= 10; i++) {
    console.log('7 * ' + i + ' = ' + 7 * i);
}
console.log("*************");

// Найти сумму всех целых чисел от 1 до 15

let sum = 0;
for (i = 0; i <= 15; i++) {
    sum += i;

}
console.log(sum);
console.log("*************");

// Найти произведение всех целых чисел от 15 до 35

let multi = 1;
for (i = 15; i <= 35; i++) {
    multi *= i;
}
console.log(multi);
console.log("*************");

// Найти среднее арифметическое всех целых чисел от 1 до 500
let firstNum = 1;
let lastNum = 500;
let average = 0;

while (firstNum <= lastNum) {
    average += firstNum;
    firstNum++;
}
console.log(average/lastNum);
console.log("*************");

// Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80
let sumEven = 0;

for (i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        sumEven += i;
    }
}
console.log(sumEven);
console.log("*************");

// Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3

for (i = 100; i < 200; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
console.log("*************");

// Дано натуральное число. Найти и вывести на страницу все его делители. Определить количество его четных делителей. Найти сумму его четных делителей
let number = 5894;
let countD = 0;
let sumD = 0;

for (i = 0; i <= number; i++) {
    if (number % i == 0) {
        console.log("Denominator: ", i);
        countD++;
        sumD += i;
    }
}
console.log("Counter: " + countD);
console.log("Sum: " + sumD);
console.log("*************");

// Напечатать полную таблицу умножения от 1 до 10

for (i = 1; i < 10; i++) {
    for (k = 1; k < 10; k++) {
        console.log(i + " * " + k + " = " + i * k);
    }
    console.log("---");
}
console.log("*************");

// Игра “Угадай число”. Сгенерировать случайное число в диапазоне от 0 до 10. Пользователь должен угадать число. Игра продолжается до тех пор, пока пользователь не угадает число. Пользователь может остановить игру в любой момент.

const randomNum = Math.floor(Math.random() * 11);

while (true) {
    let userNum = prompt("Enter number");
    if (userNum === null) {
        console.log("Game stopped")
        break;
    } else if (userNum === '') {
        alert("Введите число");
    } else {
        userNum = Number(userNum);
        if (userNum === randomNum) {
            console.log("NICE!!!");
            break;
        }
    }
}
console.log("*************");

// Запросить у пользователя число, которое будет высотой вершины прямоугольного треугольника. Вывести треугольник построчно через console.log
let triangle = '';
let numTriangle = 15;
for (i = 0; i <= numTriangle; i++) {
    triangle += '*';
    console.log(triangle);
}