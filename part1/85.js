let numbers = [1,2,3];
// let numbers = new Array(1,2,3);//internally this happend so me sari array property prototype me se milegi

console.log(Object.getPrototypeOf(numbers)); 
console.log(Array.prototype);
console.log(numbers);

function hello(){
    console.log("hello");
}
