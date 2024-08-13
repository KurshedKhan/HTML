function LenObj(student1){

    let key ,count = 0;
    for(key in student1){
        if(student1.hasOwnProperty(key)){
            count++;
        }
    }
    return count;

}


let student = {
    Name : "Vinay",
    Age : 21,
    Height : 5.6,
    Bloodgroup : "A+"
}
console.log(student)
let size = LenObj(student);
console.log("Size of Object : ",size);
