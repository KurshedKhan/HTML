let Name = ["Bhavesh","Vikash","Vinay","Manish","Kurshed"];

// length property =>
//  The length property returns the length (size) of an array.
let  size = Name.length;
let mid = Math.floor(size/2);

console.log(Name[mid]);

// pop() Method => 
//        The pop() method : removes the last element from an array.

Name.pop();

console.log(Name);

Name.pop();

console.log(Name);

// The push() method 
//    The push() method : adds a new element to an array (at the end).

Name.push("Nemichand");
console.log(Name);

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// The shift() method removes the first array element and 
// "shifts" all other elements to a lower index.

console.log(fruits);
fruits.shift();
console.log(fruits);
// The unshift() method adds a new element to an array (at the beginning), and
//  "unshifts" older elements:
fruits.unshift("Banana");
console.log(fruits);

fruits[1] = "Red";
console.log(fruits);
fruits[fruits.length] = "Kiwi";
console.log(fruits);


// The concat() method creates a new array by merging (concatenating) existing arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

let totalStudent = myBoys.concat(myGirls);

console.log(totalStudent);
let fruits_Students = fruits.concat(totalStudent);
console.log(fruits_Students);

// The concat() method can take any number of array arguments.
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

let myChildren = arr1.concat(arr2,arr3);

console.log(myChildren);

// The splice() method can be used to add new items to an array.

myChildren = ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']

myChildren.splice(2,2,"Lemon", "Kiwi");
console.log(myChildren);

// The slice() method slices out a piece of an array into a new array.

let mybabyChildren = myChildren.slice(2,5);
console.log(mybabyChildren);
console.log(myChildren);

let SChildern = myChildren.sort();
console.log(SChildern);

let num = [10,57,25,100,50,47,47,63,69];
console.log(num);
let numSort = num.sort((a, b) => a - b);
console.log(numSort);
let reverseSort = numSort.reverse();
console.log(reverseSort);


