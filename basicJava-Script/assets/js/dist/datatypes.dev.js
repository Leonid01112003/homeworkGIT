"use strict";

function sum1() {
  var num1 = parseFloat(prompt('enter first number'));
  var num2 = parseFloat(prompt('enter second number'));
  var result = (num1 + num2).toFixed(1);
  alert(result);
}

function sum2() {
  var num1 = "1";
  var num2 = 2;
  var result = +num1 + num2;
  alert(result);
}

function card() {
  var card = 820;
  var gb = prompt('Enter gigabytes,please');
  var result = Math.trunc(gb * 1024 / card);
  alert("Your flash drive can hold ".concat(result, " files"));
}

function chocolate() {
  var sum = prompt('Enter the amount of money in your wallet');
  var cost = prompt('Enter price one chocolate');
  var result = Math.trunc(sum / cost);
  var rest = sum - (result * cost).toFixed(2);
  alert("On your moneys you can buy ".concat(result, " chocolate, rest: ").concat(rest, " UAH"));
}

function reverseNumbers() {
  var num = parseInt(prompt('Enter three-digit number, please')); //123

  var hundreds = Math.trunc(num / 100); // 1

  var dozens = Math.trunc(num % 100 / 10); // 2

  var units = num % 10;
  var result = units * 100 + dozens * 10 + hundreds;
  alert("Your reverse number: ".concat(result));
}

function persentagePerAnnum() {
  var interestRate = 5;
  var amount = parseInt(prompt('Enter amount of deposit, please'));
  var result = amount * interestRate / 100;
  var percent = (result / 12).toFixed(2);
  alert("The amount of accrued interest = ".concat(percent, "%"));
}