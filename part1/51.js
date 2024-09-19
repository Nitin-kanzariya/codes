// default parameters 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4, 8);
const ans2 = addTwo(4);//4
console.log(ans);