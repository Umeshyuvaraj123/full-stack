function add(a,b){ 
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b === 0){
        return 'Error division by zero';
    }
    return a/b;
}

console.log("Add: 5+3=",add(5,3));
console.log("subtract: 5-3=",subtract(5,3));
console.log("Multiply: 5*3=",multiply(5,3));
console.log("Divide: 5/3=",divide(5,3));
