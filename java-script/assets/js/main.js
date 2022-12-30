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

function decodeHtml(html){
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
function prepareStr(str){
    let result = str.trim();
    return decodeHtml(result);
}


function sayHello(){
    const userName = prepareStr(prompt('Enter your Name'));
    if (userName !==null && userName !=='')  {
        alert(`Hello, ${userName}!`);
  } else {
    alert('Enter user Name');
  }
    }
    
//Math.PI
    function myPow(){
        const number = parseInt(prompt('Enter number')) ;
        if(!isNaN(number)){
            const result = number * number;
        alert(`Number ${number} in second degree eq: ${result}`);
        } else {
            alert('Please, enter integer number ')
        }
        
    }

    function averageNumber() {
        const number1 = parseInt(prompt('Enter first number, please'));
        const number2 = parseInt(prompt('Enter second number, please'));
        if(!isNaN(number1) && !isNaN(number2)) {
            const average = (number1 + number2) / 2 ;
            alert(`The average number between ${number1} and ${number2 }  equals ${average}`);
        } else {
            alert('Enter integer number.Fast!')
        }
    }
   
    function width() {
        const width = (prompt('Введіть довжину сторони квадрата'));
        if(!isNaN(width)) {
            const result = width * width;
        alert(result);
        } else {
            alert('Введіть число');
        }
    
    }

    function kmTomiles() {
        const koef = 0.621371;
        const km = prompt('Введіть кілометри');
        if(!isNaN(km)) {
            const result = (km * koef).toFixed(3);
            alert(`${km} кілометрів = ${result} миль `);
        } else {
            alert('Введіть число!')
        }
    }

    function calc(){
        
        const number1 = parseInt(prompt('Ввeдіть перше число'));
        const number2 = parseInt(prompt('Введіть друге число'));
        const sum = number1 + number2;
        const dif = number1 - number2;
        const plural = number1 * number2;
        const division = number1 / number2;
        alert(' Сума=' +sum+  ', Різниця=' + dif + ', Добуток=' + plural + ', Частка=' + division);
    }
    // a * x + b = 0
    // a * x = -b
    // x = -b/a
    function findX() {
        const a = parseInt(prompt('Enter first number, please'));
        const b = parseInt(prompt('Enter second number, please'));
        const x = -b / a;
        alert(`Here is an answer ${x}`)
    }

    function timeLeft() {
        const currentHours = parseInt(prompt('Enter hours'));
        const currentMinutes = parseInt(prompt('Enter minutes'));
        let hoursDifference = 24 - currentHours;
        let minutesDifference = 0;
        if(currentMinutes !==0) {
            hoursDifference -=1;//hoursDifference = hoursDifference - 1;
            minutesDifference = 60 - currentMinutes;
        } 
        
        alert(`Hours and minutes left till the end of the day is ${addZero(hoursDifference)}:${addZero(minutesDifference)}`);
    }

    function addZero(n){
        if(n<10) {
            return '0' + n;
        } else {
            return n;
        }
    }

    function age(){
        const currentYear = 2022;
        const month = 12;
        const dayOfmonth = n;
        if(n<28) {
            const result = 28 - monthOfBirth;
        }
        const yearOfBirth = parseInt(prompt('Введіть дату вашого народження'));
        const dayOfbirth = parseInt(prompt('Введіть день вашого народження'));
        const monthOfBirth = parseInt(prompt('Введіть місяць вашого народження у числовому вигляді'))
        if(!isNaN(yearOfBirth)) {
            const result = currentYear - yearOfBirth;
            alert(`Ваш вік = ${result} років`);
        }
    }

    function widthSquare(){
        const side = parseInt(prompt('Введіть відому сторону квадрату'));
        if(!isNaN(side)){
            const result = side * 4;
            alert(`Периметр квадрата дорівнює ${result}`);
        }
    }

    function stakeArea(){
        const rArea = parseInt(prompt('Введіть радіус кола'));
        if(!isNaN(rArea)) {
            const result = Math.pow((Math.PI * rArea), 2).toFixed(3);
            alert(`Площа окружності = ${result}`);
        }
    }

    ////Типи даних та оператори


    function incDecExample(){
        
        let a = 1;
        a++;
        console.log(a);
        ++a;
        console.log(a);
        a--;
        console.log(a);
        --a;
        console.log(a);


    }

    let quantity =10;

    const qty = quantity || 1;

    function sum(){
        let number1 = prompt('Please, enter first number');
        let number2 = prompt('Please, enter second number');
        if((number1) < 1  &&  (number2) < 1){
            let result = ((number1 * 10 + number2 * 10) / 10 ).toFixed(1);
            alert(`${number1} + ${number2} = ${result}`);
        }
        if(!isNaN(number1) && !isNaN(number2)){
            result = number1 + number2;
        }
        
    } 

    

    
    
    