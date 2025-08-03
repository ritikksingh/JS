    const userEmail = []             //  "Rtiik@78"

// if (userEmail) {
//     console.log("GOt user Email");
    
    
// }else{
//     console.log("Don't have user Email");
    
// }


// Falsy Value ===>>  

// false , 0 , , -0 , BigInt  0n , "" , null , undefined , NaN

//Truthy Values ===>
    // "0" , 'false' , " ", [], {}, function(){}




// if (userEmail.length===0){
//     console.log("Array is empty");
    
// }


// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0 ){
//     console.log("object is empty");
    
// }

//Nullish Coalescing Operator(??) : Null , Undefined

let val1;
// val1 = 5?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ??16


console.log(val1);


//Terniary Operator

// condition ? true : false

const iceteaPrice = 100
iceteaPrice<=80 ? console.log("less than 80") : console.log("more tham 80");

