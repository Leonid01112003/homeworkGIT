function userAge(){
    let age = parseInt(prompt('Enter your full age,please'));
    if( age > 0 && age<=11){
        const result = 'child';
        alert(result);
    } if( age >=12 && age <=17){
        const result = 'Adolescent';
        alert(result);
    } if(age >= 18 && age <= 59){
        const result = 'Grown-up';
        alert(result);
    } if( age >= 60){
        const result = 'Pensioner';
        alert(result);
    } if(isNaN(age)){
        alert('Enter your full age')
    } 
}

function specialSymbol(){
    const num = parseInt(prompt('Enter please number from 0 to 9'));
    switch (num) {
        case 0:
            alert(')')
            break;
        case 1:
            alert('!')
            break;
        case 2:
            alert('@')
            break;
        case 3:
            alert('#')
            break;
        case 4:
            alert('$')
            break;
        case 5:
            alert('%')
            break;
        case 6:
            alert('^')
            break;
        case 7:
            alert('&')
            break;
        case 8:
            alert('*')
            break;
        case 9:
            alert('(')
            break;
        default:
            alert('Please, enter number form 0 to 9')
            break;
    }
}

function range(){
    const num1 = parseInt(prompt('Please,enter first number'));
    const num2 = parseInt(prompt('Please,enter second mumber'));
    let sum = 0;
    if(!isNaN(num1) && !isNaN(num2)){
        if(num1 !== num2){
        const forNum1 = num1 < num2 ? num1 : num2;
        const forNum2 = num2 > num1 ? num2 : num1;
        for(let i=forNum1; i<=forNum2;i++){
            sum +=i;
            }
        }
        alert(`Total sum in range from ${num1} to  ${num2} is: ${sum}`)
    }else {
        alert('Enter valid number')
    }
    
    
    
}


function commonDivisor(){
    const num1 = parseInt(prompt('Please,enter first number'));//6
    const num2 = parseInt(prompt('Please,enter second mumber'));//9
    let nsd = 0;
    
    if(!isNaN(num1) && !isNaN(num2)){
    const forEnd = num1 <  num2 ? num1 :  num2;
    for(let i = 1;i<=forEnd;i++){
        if(num1 % i===0 && num2 % i==0){
            nsd = i;
        }
    }
    alert(`NSD is: ${nsd}`);
    
    }else {
        alert('Enter valid  number')
    }
}