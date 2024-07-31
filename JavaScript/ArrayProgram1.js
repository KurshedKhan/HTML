let data_set = [];

function AverageCalculate(size){

    let total = 0;
    let aver;

    for(let i = 0 ; i < size ; i++){

        data_set[i] = Number(prompt("Enter your array item : "));
    
    }

    for(let i = 0 ; i < size ; i++){

        total += data_set[i];
    }

    aver = total / size;

    return aver;

}

function Category(average){

    if(average >= 70){
        console.log("you are in high category.");
    }
    else if(average >= 50){
        console.log("you are in medium category.");
    }
    else{
        console.log("you are in low category.");
    }
}


let size = Number(prompt("Enter your array size : "));
let average = AverageCalculate(size);

Category(average);
