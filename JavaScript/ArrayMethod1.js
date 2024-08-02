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
