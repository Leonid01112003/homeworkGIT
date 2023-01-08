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


    function isPlainObj(element){
        // if(typeof(element)==='object' && !Array.isArray(element)){
        //     return true;
        // }
        return false;

    }
    console.log(isPlainObj({a:1, b:2}));//true
    console.log(isPlainObj([1, 2]));//false
    console.log(isPlainObj('qwe'));//false

    /**
  * Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
  * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
  * Сложность задачи: 1 of 5
  * @param {Object} object - любой объект для трансформации
  * @returns {Array} - вложенный массив
*/

 const makePairs = (object) => {
    let r = [];
    for(let key in object){
        
        r.push([key, object[key]])
    }
    return r;
  };
  
//   const data = { a: 1, b: 2 };
//   console.log(makePairs(data)); // [['a', 1], ['b', 2]]

  const arr = [1, 2, 3];
  function myFunc(...args) {
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

 const isEmpty = (object) => {
   for( let key in object){
    if(Boolean(object[key])!==false && object[key]!==0){
        return false;
    }

   }
   return true;
  };
  
  const data = { a: 0, b: undefined };
  const data2 = { a: undefined };
  console.log(isEmpty(data)); // false
  console.log(isEmpty(data2)); // true


  function findNumber(){
    let from = 1;
    let to = 100;
    let m = 50;
    let answer = '';
    do {
        answer = prompt(`Ваше число більше, меньше або дорівнює ${m}? Для відповіді використовуйте символи ">", "<", "="`);
        if(answer==='>' || answer==='<'){
            if(answer==='>'){
                from = m; 
             }
             if(answer==='<'){
                 to = m;
             }
             m = parseInt((from + to) / 2);
        }
        
    } while(answer!=='=')
    alert(`Ваше число: ${m} `);

    
  }