"use strict";

var num = 2;
var rez = '';

if (num > 0) {
  rez = '+';
} else if (num < 0) {
  rez = '-';
} else if (num === 0) {
  rez = '0';
} else {
  rez = 'Please, enter number';
}

var age = 30;
var who = '';

if (age > 0 && age < 11) {
  who = 'baby';
} else if (age > 12 && age < 17) {
  who = 'Kid';
} else {
  who = 'invalid age';
}

console.log(who);
/*
Order statuses
0 - new
1 - in progress
2-  delivery
3 - done
4 - canceled
*/
// const status = 0 ;
// let statusText = '';
// if(statusVal ===0){
//     statusText = 'New order';
// }

/*Cicles */

var a = 1;
var n = 10; // while(a < n){
//     console.log(a);
//     a++;
// }
// for(let i=1;i<10;i++){
//     console.log(i);
// }

function sumInRange() {
  var from = parseInt(prompt('Enter from number'));
  var to = parseInt(prompt('Enter to number'));
  var sum = 0;

  if (!isNaN(from) && !isNaN(to)) {
    if (from !== to) {
      var forFrom = from < to ? from : to;
      var forTo = to > from ? to : from;

      for (var i = forFrom; i <= forTo; i++) {
        sum = sum + i; //sum += i;
      }
    }

    alert("Total sum in range ".concat(from, "..").concat(sum));
  } else {
    alert('enter valid from/to values');
  }
}

function findNSD() {
  var num1 = parseInt(prompt('Enter first number')); //6

  var num2 = parseInt(prompt('Enter second number')); //9

  var nsd = 0;
  var forEnd = num1 < num2 ? num1 : num2;

  for (var i = 1; i <= forEnd; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      nsd = i;
    }
  }

  alert('Nsd is: ' + nsd);
}

function findAllDividers() {
  var num = parseInt(prompt('Enter  number')); //6

  var rez = '';

  if (!isNaN(num)) {
    for (var i = 1; i < num / 2; i++) {
      if (num % i === 0) {
        rez += i + ', ';
      }
    }

    rez += num;
    alert("Number ".concat(num, " deviders: ").concat(rez, ". "));
  } else {
    alert('Enter valid number');
  }
}
/*
  input 28
  *14
  *15..27
  *0(n)
*/

/*==================================*/


function getMin() {
  var num1 = document.getElementById('number1').value;
  var num2 = document.getElementById('number2').value;
  var rez = num1 < num2 ? num1 : num2;
  document.getElementById('result').innerHTML = "Min number is:<b>".concat(rez, "</b>");
}