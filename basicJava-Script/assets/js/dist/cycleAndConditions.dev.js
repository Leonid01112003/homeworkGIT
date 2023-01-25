"use strict";

function userAge() {
  var age = parseInt(prompt('Enter your full age,please'));

  if (age > 0 && age <= 11) {
    var result = 'child';
    alert(result);
  }

  if (age >= 12 && age <= 17) {
    var _result = 'Adolescent';
    alert(_result);
  }

  if (age >= 18 && age <= 59) {
    var _result2 = 'Grown-up';
    alert(_result2);
  }

  if (age >= 60) {
    var _result3 = 'Pensioner';
    alert(_result3);
  }

  if (isNaN(age)) {
    alert('Enter your full age');
  }
}

function specialSymbol() {
  var num = parseInt(prompt('Enter please number from 0 to 9'));

  switch (num) {
    case 0:
      alert(')');
      break;

    case 1:
      alert('!');
      break;

    case 2:
      alert('@');
      break;

    case 3:
      alert('#');
      break;

    case 4:
      alert('$');
      break;

    case 5:
      alert('%');
      break;

    case 6:
      alert('^');
      break;

    case 7:
      alert('&');
      break;

    case 8:
      alert('*');
      break;

    case 9:
      alert('(');
      break;

    default:
      alert('Please, enter number form 0 to 9');
      break;
  }
}

function range() {
  var num1 = parseInt(prompt('Please,enter first number'));
  var num2 = parseInt(prompt('Please,enter second mumber'));
  var sum = 0;

  if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 !== num2) {
      var forNum1 = num1 < num2 ? num1 : num2;
      var forNum2 = num2 > num1 ? num2 : num1;

      for (var i = forNum1; i <= forNum2; i++) {
        sum += i;
      }
    }

    alert("Total sum in range from ".concat(num1, " to  ").concat(num2, " is: ").concat(sum));
  } else {
    alert('Enter valid number');
  }
}

function commonDivisor() {
  var num1 = parseInt(prompt('Please,enter first number')); //6

  var num2 = parseInt(prompt('Please,enter second mumber')); //9

  var nsd = 0;

  if (!isNaN(num1) && !isNaN(num2)) {
    var forEnd = num1 < num2 ? num1 : num2;

    for (var i = 1; i <= forEnd; i++) {
      if (num1 % i === 0 && num2 % i == 0) {
        nsd = i;
      }
    }

    alert("NSD is: ".concat(nsd));
  } else {
    alert('Enter valid  number');
  }
}