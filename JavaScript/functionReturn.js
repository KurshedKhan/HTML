function Addition(num1,num2){
    let total = num1 + num2;
    return total;
}


let num1 = Number(prompt("Enter your first number : "));
let num2 = Number(prompt("Enter your second number : "));

let sum = Addition(num1,num2);

if(sum %2 == 0 ){
    console.log(`This number ${sum} is even.`);
}
else{
    console.log(`This number ${sum} is odd.`);
}