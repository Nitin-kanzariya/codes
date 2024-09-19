// console.log(this);//this store address of window(globle object   )
// console.log(window);

// "use strict"; if use then undefined for line 7
function myFunc() {//this function store into window object
    console.log("Hello");
    console.log(this);
}
myFunc();
//window.myFunc();