// Написать функцию, которая вычисляет площадь круга.

function squareOfCircle(r) {
    console.log(typeof r);
    let s = 3.14 * (r ** 2);
    return s;
}

// Написать функцию, которая вычисляет длину окружности.

function circleLength(r) {
    let p = 2 * 3.14 * r;
    return p;
}

// Написать функцию, которая вычисляет среднее арифметическое двух чисел.

function average(a, b) {
    let average = (a + b)/2;
    return average;
}

// Написать функцию calc(x, y, action), которая получает 3 аргумента: числа x и y, а также строку action. В переменной action может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной action.

function calc(x, y, action) {
    let result;
    switch (action) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = x ** y;
            break;
        default:
            break;
    }
    return result;
}