// methods
// function inside object

const person = {
    firstName : "Nitin",
    age: 19,
    about: function ()
    {
        // console.log(`person Name is ${firstName} and age is ${age}`)//this give me error 
        console.log(this);
        console.log(`person Name is ${this.firstName} and age is ${this.age}`)//This key word store address of current object
    }
}
console.log(person.about);//this give me function
person.about();

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

