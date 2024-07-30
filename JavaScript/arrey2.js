let number = [];
let ending = Number(prompt("Enter your size : "));
let total = 0;
for(let i = 0 ; i < ending ; i++){
    number[i] = Number(prompt("Enter your number"));
}

for(let i = 0 ; i < ending ; i++){
   total += number[i];
}

console.log("Total of array item : ",total);
