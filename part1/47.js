// hoisting = This allows you to call a function before it appears in the code.

foo(); // "Hello!"

function foo() {
  console.log("Hello!");
}

bar(); // TypeError: bar is not a function 
        //same for arrow function
var bar = function() {
  console.log("Hi!");
};
