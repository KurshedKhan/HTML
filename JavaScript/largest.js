let num1=prompt("enter your number");
let num2=prompt("enter your number");
let num3=prompt("enter your number");

if(num1 > num2 && num1 > num3 ){
    console.log("This number is greatest : ", num1);
}
else if(num2 > num1 && num2 > num3 ){
    console.log("This number is greatest : ", num2);
}
else if(num3 > num1 && num3 > num2 ){
    console.log("This number is greatest : ", num3);
}
else{
    console.log("This is invalid number.");
}
