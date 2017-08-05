alert("active");
//isEven
function isEven(num){
 return num % 2 === 0; 
}

//Factorial

function factorial(num) {
     var result = 1;
    for(var i = 2; i <= num; i++){
        result *= i;
        
    }
    return result;
    
}

//kebabtosnake

function kebabToSnake(str) {
   var newStr = str.replace(/-/g , "_");
    return newStr;
}