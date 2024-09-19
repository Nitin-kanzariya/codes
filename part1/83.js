// new keyword = ek object dega jisko me this keyword se access kar sakta hu and then return object and new keyword khud se hi proto me prototype object dal dega


// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]

//using new keyword we dont't need to write
//Object.create(CreateUser.prototype)

//new keyword khud se hi proto me prototype object dal dega

// constructor function 
// je fuction capital letter thi nam hoy te function ne new keyword thi call karvu
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());

