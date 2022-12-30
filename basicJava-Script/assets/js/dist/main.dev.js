"use strict";

function sayHello() {
  var userName = prompt('Enter your Name');

  if (userName !== null && userName !== '') {
    alert("Hello, ".concat(userName, "!"));
  } else {
    alert('Enter user Name');
  } //   if ((userName)===[0-9]) {
  //     } else {
  //         alert('Enter user Name');
  //     }

}

function age() {
  var currentYear = 2022;
  var yearOfBirth = parseInt(prompt('Введіть дату вашого народження'));

  if (!isNaN(yearOfBirth)) {
    var result = currentYear - yearOfBirth;
    alert("\u0412\u0430\u0448 \u0432\u0456\u043A = ".concat(result, " \u0440\u043E\u043A\u0456\u0432"));
  } else {
    alert('Будь ласка,введіть дату народження');
  }
}

function widthSquare() {
  var side = parseInt(prompt('Введіть відому сторону квадрату'));

  if (!isNaN(side)) {
    var result = side * 4;
    alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(result));
  } else {
    alert('Введіть сторону квадрату');
  }
}

function stakeArea() {
  var rArea = parseInt(prompt('Введіть радіус кола'));

  if (!isNaN(rArea)) {
    var result = Math.pow(Math.PI * rArea, 2).toFixed(3);
    alert("\u041F\u043B\u043E\u0449\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 = ".concat(result));
  } else {
    alert('Введіть відомий вам радіус кола');
  }
}

function speed() {
  var distance = parseInt(prompt('Введіть відстань між двома містами'));
  var time = parseInt(prompt('Введіть час,за який ви хочете подолати відстань'));

  if (!isNaN(distance) && !isNaN(time)) {
    var result = Math.round(distance / time);
    alert("\u0429\u043E\u0431 \u043F\u043E\u0434\u043E\u043B\u0430\u0442\u0438 \u0446\u0435\u0439 \u0448\u043B\u044F\u0445 \u0437\u0430 \u0442\u0430\u043A\u0438\u0439 \u0447\u0430\u0441 - ".concat(time, " , \u0432\u0430\u043C \u0442\u0440\u0435\u0431\u0430 \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ").concat(result, " \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0438(\u0456\u0432) \u0437\u0430 \u0433\u043E\u0434\u0438\u043D\u0443"));
  } else {
    alert('Введіть будь ласка відстань та час');
  }
}

function dollarToEuro() {
  var koef = 0.9398;
  var dollar = parseInt(prompt('Введіть доллари'));

  if (!isNaN(dollar)) {
    var result = (dollar * koef).toFixed(3);
    alert("".concat(dollar, " \u0434\u043E\u043B\u043B\u0430\u0440(\u0456\u0432) \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(result, " \u0435\u0432\u0440\u043E"));
  } else {
    alert('Введіть кількість долларів для обміну,будь ласка');
  }
}