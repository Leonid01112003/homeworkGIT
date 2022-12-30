"use strict";

function sum(a, b) {
  return a + b;
} // function func1(){
//     console.log(arguments);
// }
// func1();
// function sum(a, b){
//         return a+b;
//     }
// const sum = (a, b) => a + b;//стрілкова функція
// const obj = {
//     sum: function(a, b){
//         console.log(this);
//         return a + b;
//     },
//         mul: (a, b)=>{
//             console.log(this);
//             return a*b
//         }
// }
// const addZero = n => n<10 ? '0'+n : ''+n;
// const s = sum(2, 3);
// console.log(s);
// console.log(addZero(5));
// obj.sum(2,3);
// obj.mul(2,3);
// const n = 10;
// setTimeout(function(){
//     console.log(n+10);
// } )


function findMin() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a < b ? a : b;
}

function getNumberById(id) {
  return parseInt(document.getElementById(id).value.trim());
}

function getMin() {
  var num1 = getNumberById('number1');
  var num2 = getNumberById('number2');
  var rez = findMin(num1, num2);
  document.getElementById('result').innerHTML = "Min number is: <b>".concat(rez, "</b>");
}

function calcPow() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var r = 1;

  for (var i = 0; i < k; i++) {
    r = r * n;
  }

  return r;
}

function myPow() {
  var number = getNumberById('pow_number');
  var k = getNumberById('pow_koeff');
  var rez = calcPow(number, k);
  document.getElementById('result2').innerHTML = "".concat(number, "^").concat(k, " is:<b>").concat(rez, "</b>");
}