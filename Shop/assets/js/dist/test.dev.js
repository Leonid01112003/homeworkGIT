"use strict";

function myFunc() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num1").value;
  var errors = [];

  if (isNaN(num1)) {
    // errors.push('Enter valid value')
    alert('Enter valid value');
    return;
  }

  if (isNaN(num2)) {
    // errors.push('Enter valid value')
    alert('Enter second valid value');
    return;
  }

  var sum = num1 + num2;
  alert(sum);
}