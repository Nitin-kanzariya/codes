
// Primitive Types: Immutable and stored by value (e.g., Number, String, Boolean).
let x = 10;
let y = x; // y now holds a copy of the value in x
x = 20; // x is changed, but y remains 10

// Reference Types: Mutable and stored by reference (e.g., Object, Array, Function).
let obj1 = { name: 'Alice' };
let obj2 = obj1; // obj2 holds a reference to the same object as obj1
obj1.name = 'Bob'; // changes the name property of the object
console.log(obj2.name); // 'Bob', since obj2 references the same object



// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);

let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);//Object
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));


// array indexing 