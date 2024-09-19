// Promise = represent future value
//1) status  = pending/fullfild/reject
//2) value = undefined
//promise is not javascript feature it is handel by browser

console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];



// produce 
const friedRicePromise = new Promise((resolve,reject)=>{ //resolve and reject also function 
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"}); // i pass object
    }else{
        // reject("could not do it");
        reject(new Error('Something misssing in bucket')) ;

    }
})




// consume 
// how to consume 

friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
).catch(
    // jab promise reject hoga 
    (error)=>{
        console.log(error)
    })


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")