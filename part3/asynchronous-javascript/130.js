// synchronous programming vs asynchronous programming
// synchronous programming = line by line execute hoga
// synchronous programming single threaded

// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout(function,time(ms)); return ek id karega

console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);//mean function minimum 1 sec ke bad call karu

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");
clearTimeout(id); // timeout ne removee karva mate 
console.log("Script end");
