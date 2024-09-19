// arrow functions 
//arrow functions ka khudka this nahi hota
//wo apne 1 step uper walo ka this leta hai
//arrow function ke this ko me change nahi kar sakta

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this);
        console.log(this.firstName, this.age);
    }   
}

user1.about();
user1.about.call(user1);