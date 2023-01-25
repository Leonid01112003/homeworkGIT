const arr = new Array();

const arr2 = [4];

arr2[99] = 3;


2,5,7

const news = [];
news[2]= {
    id: 2,
    title: 'News 1'
}
news[5]= {
    id: 5,
    title: 'News 2'
}
news[7]= {
    id: 7,
    title: 'News 3'
}

const badArray = ['Hello' , 12, true, {a: 'qwe'}, [4,5]];

const goodArrayStr = ['hello', 'world' , 'JavaScript', 'is', 'awesome'];

console.log(goodArrayStr.join(' '));

const twoLevelArray = [[1,2,2], 
                       [3,4,5],
                    ]
for(let i=0; i<goodArrayStr.length;i++){
    console.log(i, goodArrayStr[i]);
}

goodArrayStr.forEach((el , ind  )=>{
console.log(ind, el);
} )

const goodArrayStr2 = goodArrayStr.map( (el)=>{
    return el+','
} )


const arrInput = [3,6,23,6,99,65,34,6,55,82];

// const arrOutput = [];

// for(let i=0;i<arrInput.length;i++){
//     if(arrInput[i] %)
// }

const arrOutput = arrInput.map( (el)=>  el % 2 === 0 ? el * 2 : el
)
console.log(arrOutput);

arrInput.sort((a, b)=>{
    return a - b;
    // if(a<b){
    //     return -1
    // }else  if(a>b){
    //     return 1
    // }else if(a===b){
    //     return 0
    // }
});
console.log(arrInput);