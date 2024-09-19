// filter method 
// The filter method does not change the original array.
// It creates a new array with all elements that pass the test implemented by the provided function.
//always return boolean value

const numbers = [1,3,2,6,4,8];



const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);