let number = prompt("Enter your number : ");
let isPrime = true;

if(number == 0 ){
    console.log("This number is not prime number.");
}
else if(number == 1){
    console.log("This number is not prime number.");
}
else if(number >= 2){
    for(let i = 2 ; i < number ; i++){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(`This ${number} is prime number.`);
    }
    else{
        console.log(`This ${number} is not prime number.`);
    }
}

