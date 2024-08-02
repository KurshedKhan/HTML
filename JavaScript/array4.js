
let data = [];

 function averagecalculator(size){
    let total = 0;
    let average ;
 
 for(let i = 0 ; i < size ; i++){
     data[i] = Number(prompt("enter your number:"));
 }
 for(let i = 0 ; i < size ; i++){
    total += data[i] ;
 }
  average = total / size;
 return average;
} 
let size = Number(prompt("enter your array size:"));
console.log(averagecalculator(size))


