//me ye chahta hu ki meri key obj2 me nahi mile to me us key ko obj1 me search karu
const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2={
//     key3:"value3"
// }
// console.log(obj2.key1);


// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]] same hi hai



// prototype    

// // there is one more way to create empty object

const obj2 = Object.create(obj1); // {}

obj2.key3 = "value3";
console.log(obj2.key1);

// obj2.key2 = "unique";
console.log(obj2.key2);

console.log(obj2.__proto__);

