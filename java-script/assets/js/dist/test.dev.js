"use strict";

// for(let i=2;i<=10;i=i+2){
//         console.log(i);
// }
// for(let i=o;i<3;i++){
//     alert(`число ${i}!`)
// }
// let i = 0;
// while(i < 3){
//     console.log(i);
//     i++;
// }
function isPlainObj(element) {
  // if(typeof(element)==='object' && !Array.isArray(element)){
  //     return true;
  // }
  return false;
}

console.log(isPlainObj({
  a: 1,
  b: 2
})); //true

console.log(isPlainObj([1, 2])); //false

console.log(isPlainObj('qwe')); //false

/**
* Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
* Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
* Сложность задачи: 1 of 5
* @param {Object} object - любой объект для трансформации
* @returns {Array} - вложенный массив
*/

var makePairs = function makePairs(object) {
  var r = [];

  for (var key in object) {
    r.push([key, object[key]]);
  }

  return r;
}; //   const data = { a: 1, b: 2 };
//   console.log(makePairs(data)); // [['a', 1], ['b', 2]]


var arr = [1, 2, 3];

function myFunc() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log(args);
}

console.log(arr);
/**
* Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
* Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
* Сложность задачи: 2 of 5
* @param {Object} object - любой объект
* @param {?} args - список значений для удаления
* @returns {Object} - новый объект без удаленных значений
*/
//  const without = (object, ...args) => {
//     const r= {};
//     for(let key in object){
//         if(args.indexOf(key)===-1){
//             r[key] = 
//         }
//     }
//     return r;
// };
// const data = { a: 1, b: 2, c: 3 };
// console.log(without(data, 'b', 'c')); // { a: 1 }

/**
  * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
  * Ожидаемый результат: ({}) => true,
      ({ a: undefined }) => true,
      ({ a: 1 }) => false
  * Пустые значения: '', null, NaN, undefined
  * Сложность задачи: 2 of 5
  * @param {Object} object - объект с примитивами
  * @returns {boolean}
*/

var isEmpty = function isEmpty(object) {
  for (var key in object) {
    if (Boolean(object[key]) !== false && object[key] !== 0) {
      return false;
    }
  }

  return true;
};

var data = {
  a: 0,
  b: undefined
};
var data2 = {
  a: undefined
};
console.log(isEmpty(data)); // false

console.log(isEmpty(data2)); // true

function findNumber() {
  var from = 1;
  var to = 100;
  var m = 50;
  var answer = '';

  do {
    answer = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u0456\u043B\u044C\u0448\u0435, \u043C\u0435\u043D\u044C\u0448\u0435 \u0430\u0431\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(m, "? \u0414\u043B\u044F \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u0438 \">\", \"<\", \"=\""));

    if (answer === '>' || answer === '<') {
      if (answer === '>') {
        from = m;
      }

      if (answer === '<') {
        to = m;
      }

      m = parseInt((from + to) / 2);
    }
  } while (answer !== '=');

  alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(m, " "));
}