//if 

// if (2 === "2"){
// console.log("executed");

// }

// <,>, <=, >=, == ,!=, ===, !==



// const temp = 50

// if(temp===30){
//     console.log("temp is less than 50");
    
// }else{
//         console.log("temp is greater than 50");

// }



// const score = 200
// if (score>100){
//   let power= "fly"
//     console.log(`User Power ${power}`);
    

// }
// console.log(power);



// const balance = 1000
// // if (balance>500) console.log("test");

// if (balance <500) {
//     console.log("less then 500");
    
// }else if (balance<750) {
//     console.log("less then 750");
    
// }else if (balance<900) {
//     console.log("less then 900");
    
// }else   {
//     console.log("less then 1200");
    
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("allow to buy courses");
    
} if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user looged In");
    
}