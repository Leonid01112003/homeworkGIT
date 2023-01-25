function myFunc(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num1").value;
    let errors = [];
    if(isNaN(num1)){
        // errors.push('Enter valid value')
        alert('Enter valid value')
        return;
    }
    if(isNaN(num2)){
        // errors.push('Enter valid value')
        alert('Enter second valid value');
        return;
    }

    const sum = num1 + num2;
    alert(sum);
    

}