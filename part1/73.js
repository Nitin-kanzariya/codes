/*
const user1 = {
    firstName : "harshit",
    age: 8,   
    about: function ()
    {
        console.log(this.firstName, " ", this.age);
    }
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

//now i want to call about  for user2 without copying about function in user2
user1.about.call(user2);//Using call function i pass this value which object to point
user1.about.call();//undefined undefined
user1.about();
*/

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

about.call(user1);//harshit 8 undefined undefined
about.call(user2, "guitar", "bach");//mohit 9 guitar bach



// apply
// about.apply(user1, ["guitar", "bach"]);



// bind
// const func = about.bind(user2, "guitar", "bach"); //bind return a function
// func();
