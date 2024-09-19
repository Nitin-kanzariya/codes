// block scope vs function scope 

// {//this is called block in javascript

// }

// let and const are block scope
// var is function scope 

// const firstName = "Kanzariya";//globle block

// {
//     const firstName = "Nitin";
//     console.log(firstName);
// }

// {
//     const firstName = "chetan";
//     console.log(firstName);
// }
//this two block are totally different so firstName is different for both block

if(true){
    var firstName = "harshit";
    console.log(firstName);
}

console.log(firstName);//harshit

function myApp(){
    if(true){
        var firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);//different block still use firstName because of fuction scop
    }
    console.log(firstName);
}
// console.log(firstChar); // Give Reference error because try to access variable out of fuction
myApp();