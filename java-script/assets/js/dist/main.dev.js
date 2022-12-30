"use strict";

// var a;
// var c;
// // alert("Hello world");
// console.log(a);
// a = 5;
// console.log(a);
// const pi = 3.14;
// {
//    c= 10; 
//    let b = 'Hello';
// }
// console.log(c);
// =============
// const num1 = 2;
// const num2 = 3;
// const sum = num1 + num2;
// console.log("SUM = "+sum);
// const num = 1;//integer
// console.log(typeof(num));
// const pi = 3.14;//float [] double
// console.log(typeof(pi));
// const str = '';
// console.log(typeof(str));
// const u = undefined;
// console.log(typeof(u));
// const n = null;
// console.log(typeof(n));
// const x = NaN;
// console.log(typeof(x));
// const total =  1234 ;
// // const totalText = 'Total cost ' +  total  +  ' UAH';
// const totalText = `Total cost ${total} UAH`;
// console.log(totalText);
// //Available
// const myNumber = 123;
// const my_number = 123;
// const MyNumber = 123;
// const MyNumber2 = 123;

/*
//NOT available
const 1_number = 1;
const 1-number = 1;
const my-number = 1;
const myNumber! = 1;

*/
// const name = prompt('What is your name?');
// console.log(name);
// alert(`Hello ${name}!`);
// const is = confirm('Yes or no?');
// const bool = true;//false
// console.log(is);
// if (is === true){
//     alert('Yes')
// }
// else {
//     alert('No')
// }
// ///Available
// const myNumber = 123;
// const my_number = 123;
// const MyNumber = 123;
// const MyNumber2 = 123;

/*
//NOT available
const 1_number = 1;
const 1-number = 1;
const my-number = 1;
const myNumber! = 1;
const const = 1;
*/
// const firstName = prompt('Як вас звати?')
// console.log(firstName);
// alert(`Привіт ${firstName}!`);
// const DateofBirth = prompt('Дата народження')
// console.log(DateofBirth);
// function sayHello(userName) {
//     console.log(usernName);
//     alert('Hello,'+userName+'!')
// }
// sayHello('Leo');
// sayHello('Cristiano');
// const sayHello = function (){
//     alert('Hello')
// }
// sayHello();
function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function prepareStr(str) {
  var result = str.trim();
  return decodeHtml(result);
}

function sayHello() {
  var userName = prepareStr(prompt('Enter your Name'));

  if (userName !== null && userName !== '') {
    alert("Hello, ".concat(userName, "!"));
  } else {
    alert('Enter user Name');
  }
} //Math.PI


function myPow() {
  var number = parseInt(prompt('Enter number'));

  if (!isNaN(number)) {
    var _result = number * number;

    alert("Number ".concat(number, " in second degree eq: ").concat(_result));
  } else {
    alert('Please, enter integer number ');
  }
}

function averageNumber() {
  var number1 = parseInt(prompt('Enter first number, please'));
  var number2 = parseInt(prompt('Enter second number, please'));

  if (!isNaN(number1) && !isNaN(number2)) {
    var average = (number1 + number2) / 2;
    alert("The average number between ".concat(number1, " and ").concat(number2, "  equals ").concat(average));
  } else {
    alert('Enter integer number.Fast!');
  }
}

function width() {
  var width = prompt('Введіть довжину сторони квадрата');

  if (!isNaN(width)) {
    var _result2 = width * width;

    alert(_result2);
  } else {
    alert('Введіть число');
  }
}

function kmTomiles() {
  var koef = 0.621371;
  var km = prompt('Введіть кілометри');

  if (!isNaN(km)) {
    var _result3 = (km * koef).toFixed(3);

    alert("".concat(km, " \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0456\u0432 = ").concat(_result3, " \u043C\u0438\u043B\u044C "));
  } else {
    alert('Введіть число!');
  }
}

function calc() {
  var number1 = parseInt(prompt('Ввeдіть перше число'));
  var number2 = parseInt(prompt('Введіть друге число'));
  var sum = number1 + number2;
  var dif = number1 - number2;
  var plural = number1 * number2;
  var division = number1 / number2;
  alert(' Сума=' + sum + ', Різниця=' + dif + ', Добуток=' + plural + ', Частка=' + division);
} // a * x + b = 0
// a * x = -b
// x = -b/a


function findX() {
  var a = parseInt(prompt('Enter first number, please'));
  var b = parseInt(prompt('Enter second number, please'));
  var x = -b / a;
  alert("Here is an answer ".concat(x));
}

function timeLeft() {
  var currentHours = parseInt(prompt('Enter hours'));
  var currentMinutes = parseInt(prompt('Enter minutes'));
  var hoursDifference = 24 - currentHours;
  var minutesDifference = 0;

  if (currentMinutes !== 0) {
    hoursDifference -= 1; //hoursDifference = hoursDifference - 1;

    minutesDifference = 60 - currentMinutes;
  }

  alert("Hours and minutes left till the end of the day is ".concat(addZero(hoursDifference), ":").concat(addZero(minutesDifference)));
}

function addZero(n) {
  if (n < 10) {
    return '0' + n;
  } else {
    return n;
  }
}

function age() {
  var currentYear = 2022;
  var month = 12;
  var dayOfmonth = n;

  if (n < 28) {
    var _result4 = 28 - monthOfBirth;
  }

  var yearOfBirth = parseInt(prompt('Введіть дату вашого народження'));
  var dayOfbirth = parseInt(prompt('Введіть день вашого народження'));
  var monthOfBirth = parseInt(prompt('Введіть місяць вашого народження у числовому вигляді'));

  if (!isNaN(yearOfBirth)) {
    var _result5 = currentYear - yearOfBirth;

    alert("\u0412\u0430\u0448 \u0432\u0456\u043A = ".concat(_result5, " \u0440\u043E\u043A\u0456\u0432"));
  }
}

function widthSquare() {
  var side = parseInt(prompt('Введіть відому сторону квадрату'));

  if (!isNaN(side)) {
    var _result6 = side * 4;

    alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(_result6));
  }
}

function stakeArea() {
  var rArea = parseInt(prompt('Введіть радіус кола'));

  if (!isNaN(rArea)) {
    var _result7 = Math.pow(Math.PI * rArea, 2).toFixed(3);

    alert("\u041F\u043B\u043E\u0449\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 = ".concat(_result7));
  }
} ////Типи даних та оператори


function incDecExample() {
  var a = 1;
  a++;
  console.log(a);
  ++a;
  console.log(a);
  a--;
  console.log(a);
  --a;
  console.log(a);
}

var quantity = 10;
var qty = quantity || 1;

function sum() {
  var number1 = prompt('Please, enter first number');
  var number2 = prompt('Please, enter second number');

  if (number1 < 1 && number2 < 1) {
    var _result8 = ((number1 * 10 + number2 * 10) / 10).toFixed(1);

    alert("".concat(number1, " + ").concat(number2, " = ").concat(_result8));
  }

  if (!isNaN(number1) && !isNaN(number2)) {
    result = number1 + number2;
  }
}