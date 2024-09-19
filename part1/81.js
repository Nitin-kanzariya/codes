function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object

console.log(hello.name);


// you can add your own properties 
hello.myOwnProperty = "very unique value";

console.log(hello.myOwnProperty);
console.log(hello);

// name property ---> tells function name;

// function provides more usefull properties.


//jab bhi hum fuction banate hai tab hame extra freespce pan male

// console.log(hello.prototype); // {}

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
//console.log(hello.prototype);
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());