// function isPerfect(n){
//     let sum = 0;
//     for(let i=0;i<n;i++){
//         if(n%i===0){
//             sum += i;
//         }
//     }
//     return n===sum
// }


// for(let i=1;i<1000;i++){
//     if(isPerfect(i)){
//         console.log(i);
//     }
// }



// function sum(a, b){
//     return 'Sum is: '+ ( a + b); 
// }

// alert('Sum is '+ sum(2,3))


const newYearTable = {
    type: 'transformer',
    places: 7,
    color: {
    table:  'white',
    guests: 'normal'
    },
    setGuestsColor: function(color){
        this.color.guests = color;
    },
    isClean: true,
    checkClean: function

};


console.log(newYearTable.color.guests);
newYearTable.setGuestsColor('blue');
