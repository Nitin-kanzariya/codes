// map method input as a callback function
// It does not change the original array but returns a new array with the transformed elements.


const numbers = [3,4,6,1,8];

const square = function(number){
    return number*number;
}
const squareNumber = numbers.map(square);

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
console.log(squareNumber);

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);