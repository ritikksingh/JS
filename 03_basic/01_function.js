function sayMyName(){
    // console.log("ritik");
    
}
// sayMyName()


// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }


function addTwoNumber(number1,number2){
//     let result = number1+number2
//     return result

return number1+number2
 }


 const result = addTwoNumber(3,5)
//  console.log("result:" , result);
 



// function loginUserMessage(user){

//     // if(user === undefined){
//     if(!user ){
//         console.log("please enter a user Name");
//         return
//     }
//     return `${user} just logged in`
// }
// // console.log(loginUserMessage("ritik"));
// console.log(loginUserMessage());


// function calculateCartPrice(...num1){     //(...num1) Rest Operator
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,2000));


function calculateCartPrice(val1, val2, ...num1){     
    return num1
}
//  console.log(calculateCartPrice(200,300,400,2000));


 const user = {
    userName: "ritik",
    price: 365
 }
function handleObject(anyObject){
console.log(`UserName is ${anyObject.userName} and Price is ${anyObject.price}`);

}
// handleObject(user)


handleObject({
    userName:"Sam",
    price: 788
})


// const myNewArray = [200,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,500,600]));
