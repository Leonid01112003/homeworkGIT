
function sayHello(){
    const userName = prompt('Enter your Name');
    if ( userName !==null && userName !=='')  {
        alert(`Hello, ${userName}!`);
  } else {
    alert('Enter user Name');
  }

//   if ((userName)===[0-9]) {
    
//     } else {
//         alert('Enter user Name');
//     }
    }


    function age(){
        const currentYear = 2022;
        const yearOfBirth = parseInt(prompt('Введіть дату вашого народження'));
        if(!isNaN(yearOfBirth)){
            const result = currentYear - yearOfBirth;
            alert(`Ваш вік = ${result} років`);
        }else {
            alert('Будь ласка,введіть дату народження')
        }
    }

    function widthSquare(){
        const side = parseInt(prompt('Введіть відому сторону квадрату'));
        if(!isNaN(side)){
            const result = side * 4;
            alert(`Периметр квадрата дорівнює ${result}`);
        }else {
            alert('Введіть сторону квадрату')
        }
    }

    function stakeArea(){
        const rArea = parseInt(prompt('Введіть радіус кола'));
        if(!isNaN(rArea)){
            const result = Math.pow((Math.PI * rArea), 2).toFixed(3);
            alert(`Площа окружності = ${result}`);
        }else {
            alert('Введіть відомий вам радіус кола')
        }
    }

    function speed(){
        const distance = parseInt( prompt('Введіть відстань між двома містами'));
        const time = parseInt(prompt('Введіть час,за який ви хочете подолати відстань'));
        if(!isNaN(distance) && !isNaN(time)){
            const result = Math.round(distance / time);
            alert(`Щоб подолати цей шлях за такий час - ${time} , вам треба рухатися зі швидкістю ${result} кілометри(ів) за годину`);
        }else {
            alert('Введіть будь ласка відстань та час')
        }
        
    }

    function dollarToEuro(){
        const koef = 0.9398;
        const dollar = parseInt(prompt('Введіть доллари'));
        if(!isNaN(dollar)){
            const result = (dollar * koef).toFixed(3);
            alert(`${dollar} доллар(ів) дорівнює ${result} евро`);
        }else {
            alert('Введіть кількість долларів для обміну,будь ласка')
        }
    }