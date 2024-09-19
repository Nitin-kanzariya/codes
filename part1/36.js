// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 
//In javascript object key are by default is string

// const person = {name:"Harshit",age:22};

const person = {
    name: "harshit", // "name":"harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
// console.log(person["name"]); //person.name
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects
person["gender"] = "male"; // person.gender="Male";
console.log(person);