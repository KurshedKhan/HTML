
function LargestNumber(num1,num2,num3){

    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}


let num1 = Number(prompt("First Number : "));
let num2 = Number(prompt("Second Number : "));
let num3 = Number(prompt("Third Number : "));

let number = LargestNumber(num1,num2,num3);
console.log("This is largest number : ",number);

