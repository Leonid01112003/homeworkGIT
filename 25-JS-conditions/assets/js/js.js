

function sum(a, b){
    return a+b;
}



// function func1(){
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

    function findMin(a=0, b=0){
        return a < b ? a : b;
    }

    function getNumberById(id){
        return parseInt((document.getElementById(id).value).trim())
    } 
   
    function getMin(){
        const num1 = getNumberById('number1');
        const num2 = getNumberById('number2');
    
        const rez = findMin(num1, num2); 
        document.getElementById('result').innerHTML = `Min number is: <b>${rez}</b>`;
    }

    function calcPow(n=1, k=1){
        let r = 1;
        for(let i=0;i<k;i++ ){
            r = r * n;
        }
        return r;
        
    }

    function myPow(){
        const number = getNumberById('pow_number');
        const k = getNumberById('pow_koeff');

        const rez = calcPow(number, k);
        document.getElementById('result2').innerHTML = `${number}^${k} is:<b>${rez}</b>`;
    }
    