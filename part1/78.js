//me jab bhi object banunga utni bar har ek object ke liye alag se method store hogi if million object created then million times method store which store more memory therfore avoid this erro i created another object which contain all method of user

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;//Reference store
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harcshit@gmail.com', 17, "my address");


console.log(user1.about());
console.log(user3.about());