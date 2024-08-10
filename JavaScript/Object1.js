let person = {
    name1 : "Vikash",
    age : 21,
    height : 5.7,
    bloodgroup : "A+",
    vote : function(){
        if(this.age >= 18){
            console.log("you are eligible for vote.");
        }else{
            console.log("you are not eligible for vote.");
        }
        
    }

}
person.roll = 101;


if(person.age > 18){
    console.log("you are eligible for vote.");
}
else{
    console.log("you are not eligible for vote.")
}

if(person.roll == 101){
    console.log("you can enter in the class.");
}
else{
    console.log("you can not enter in the class.")
}
person.vote();

