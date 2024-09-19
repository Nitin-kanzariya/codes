// important array methods 

const numbers = [4, 2, 5, 8];
 
function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
}
// for (let i = 0; i < numbers.length; i++)
// {
//     myFunc(numbers[i], i);
// }

//Using Foreach
//Foreach take as input Callback function

// numbers.forEach(myFunc);

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach((number, index)=>{
//      console.log(`index is ${index} number is ${number}`);
// })

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }


