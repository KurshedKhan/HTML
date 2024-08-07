const fruits = ["Apple", "Orange", "Apple", "Mango"];

// The indexOf() method searches an array 
//      for an element value and returns its position.


let item = prompt("Enter your fruits name : ");

console.log(`${item} position is :  ${fruits.indexOf(item)}`);

// Array.lastIndexOf() is the same as Array.indexOf(),
//  but returns the position of the last occurrence of the specified element.

console.log(`${item} position is :  ${fruits.lastIndexOf(item)}`);

// ECMAScript 2016 introduced Array.includes() to arrays. 
// This allows us to check if an element is present in an array 
// (including NaN, unlike indexOf).


let number = [17,45,76,78,12,34,18,19];

console.log(number.find(myFunction));

function myFunction(value , index , array){

    return value > 18;
}


// The findIndex() method returns the index of the 
//                 first array element that passes a test function.


let number1 = [17,45,76,78,12,34,18,19];

console.log(number1.findIndex(myFunction));

function myFunction(value , index , array){

    return value > 18;
}

//  ES2023 added the findLast() method that will start 
//      from the end of an array and return the value of the 
//      first element that satisfies a condition.

let number2 = [17,45,76,78,12,34,18,19];

console.log(number2.findLast(myFunction));

function myFunction(value , index , array){

    return value > 18;
}

// The findLastIndex() method finds the index of 
//  the last element that satisfies a condition.

let number3 = [17,45,76,78,12,34,18,19];

console.log(number3.findLastIndex(myFunction));

function myFunction(value , index , array){

    return value > 18;
}