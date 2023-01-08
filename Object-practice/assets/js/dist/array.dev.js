"use strict";

var arr = new Array();
var arr2 = [4];
arr2[99] = 3;
2, 5, 7;
var news = [];
news[2] = {
  id: 2,
  title: 'News 1'
};
news[5] = {
  id: 5,
  title: 'News 2'
};
news[7] = {
  id: 7,
  title: 'News 3'
};
var badArray = ['Hello', 12, true, {
  a: 'qwe'
}, [4, 5]];
var goodArrayStr = ['hello', 'world', 'JavaScript', 'is', 'awesome'];
console.log(goodArrayStr.join(' '));
var twoLevelArray = [[1, 2, 2], [3, 4, 5]];

for (var i = 0; i < goodArrayStr.length; i++) {
  console.log(i, goodArrayStr[i]);
}

goodArrayStr.forEach(function (el, ind) {
  console.log(ind, el);
});
var goodArrayStr2 = goodArrayStr.map(function (el) {
  return el + ',';
});
var arrInput = [3, 6, 23, 6, 99, 65, 34, 6, 55, 82]; // const arrOutput = [];
// for(let i=0;i<arrInput.length;i++){
//     if(arrInput[i] %)
// }

var arrOutput = arrInput.map(function (el) {
  return el % 2 === 0 ? el * 2 : el;
});
console.log(arrOutput);