let number = Number(prompt("Enter your number : "));
let string = "";

for(let i = 0 ; i < number ; i++){

    for(let j = number ; j > i ; j--){
        
        string += "*";

    }
    string += "\n";
}

console.log(string);




for(let i = 1 ; i < number ; i++){

    for(let j = 0 ; j < i ; j++){
        
        string += "*";

    }
    string += "\n";
}

console.log(string);