const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

const func = user1.about;//just copy about function into func
func();//undefined undefined
//when i call func() it is in my window object so this store address of window

const myFunc = user1.about.bind(user1);
myFunc();