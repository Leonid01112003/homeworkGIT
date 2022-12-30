const num = 2;
let rez = '';
if(num > 0){
    rez = '+';
}else if(num < 0){
    rez = '-';
}else if(num === 0) {
    rez = '0';
}else{
    rez = 'Please, enter number';
}

const age = 30;
let who = '';
if(age > 0 && age < 11){
    who = 'baby';
}else if(age > 12 && age < 17){
    who = 'Kid';
}else {
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
let a = 1;
const n = 10;

// while(a < n){
//     console.log(a);
//     a++;
// }

// for(let i=1;i<10;i++){
//     console.log(i);
// }


function sumInRange(){
    const from = parseInt(prompt('Enter from number'));
    const to = parseInt(prompt('Enter to number'));
    let sum = 0;

    if(!isNaN(from) && !isNaN(to) ){
        if(from !== to) {
            const forFrom = from < to ? from : to;
        const forTo = to > from ? to : from;
        for(let i=forFrom;i<=forTo;i++){
            sum = sum + i;//sum += i;
        }
        }
        
        alert(`Total sum in range ${from}..${sum}`);
    }else {
        alert('enter valid from/to values');
    }
}

function findNSD(){
    const num1 = parseInt(prompt('Enter first number'));//6
    const num2 = parseInt(prompt('Enter second number'));//9
    let nsd = 0;

    const forEnd = num1 < num2 ? num1 : num2;
    for(let i=1;i<=forEnd;i++){
        if(num1 % i===0 && num2 % i===0 ){
            nsd = i;
        }
    }
    alert('Nsd is: '+nsd);
}

function findAllDividers(){
    const num = parseInt(prompt('Enter  number'));//6
    let rez = '';
    if(!isNaN(num)){
        for(let i=1;i<num/2;i++){
            if(num % i ===0){
                rez += i+', ';
            }
        }
        rez +=num;
        alert(`Number ${num} deviders: ${rez}. `);
    }else{
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
function getMin(){
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;

    const rez = num1 < num2 ? num1 : num2; 
    document.getElementById('result').innerHTML = `Min number is:<b>${rez}</b>`;
}