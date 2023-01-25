

function sum1(){
    const num1 = parseFloat(prompt('enter first number'));
    const num2 = parseFloat(prompt('enter second number'));
    const result = (num1 + num2).toFixed(1) ;
    alert(result);

}


function sum2(){
    let num1 = "1";
    let num2 = 2;
    const result = (+num1) + num2;
    alert(result);
}

function card(){
    const card = 820;
    const gb = (prompt('Enter gigabytes,please'));
    const result =  Math.trunc((gb * 1024) / card) ;
    alert(`Your flash drive can hold ${result} files`)
}

function chocolate(){
    const sum = prompt('Enter the amount of money in your wallet');
    const cost = prompt('Enter price one chocolate');
    const result = Math.trunc(sum / cost) ;
    const rest = sum -( result * cost).toFixed(2);
    alert(`On your moneys you can buy ${result} chocolate, rest: ${rest} UAH`);
}

function reverseNumbers(){
    const num = parseInt(prompt('Enter three-digit number, please')); //123
    const hundreds = Math.trunc( num / 100); // 1
    const dozens = Math.trunc((num % 100) / 10); // 2
    const units = num % 10;
    const result = units * 100 + dozens * 10 + hundreds;
    alert(`Your reverse number: ${result}`);
}

function persentagePerAnnum(){
    const interestRate = 5;
    const amount = parseInt(prompt('Enter amount of deposit, please'));
    const result = (amount * interestRate) / 100;
    const percent = (result / 12).toFixed(2);
    alert(`The amount of accrued interest = ${percent}%`);

}