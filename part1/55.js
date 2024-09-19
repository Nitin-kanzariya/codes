// function returning function 

function myFunc(){
    // function hello(){
    //     return "hello world"
    // }
    // return hello;

    //Or
    
    return function ()
    {
        return "Hello World";
    }
}

const ans = myFunc();
console.log(ans());