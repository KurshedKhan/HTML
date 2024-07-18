let ending = prompt("How many people in your voting list : ")

for(let i = 0 ; i < ending; i++){

    let name = prompt("Enter your name : ");
    let age  = prompt("Enter your age  : ");

    if(age >= 18){
        console.log(`Your name is ${name}. \nage is ${age}. \nyou are valid for vote.`);
    }
    else{
        console.log(`Your name is ${name}. \nage is ${age}. \nyou are not valid for vote.`)
    }
    
}
