const user = {
   username : "Ritik",
    price : 99,

    welcomeMessage : function(){
        console.log(` Hey ${this.username} , Welcome to the Website`);
        // console.log(this);
        
        
    }
    
}
// user.welcomeMessage()
// user.username = "Sanu"
// user.welcomeMessage()

// console.log(this);


///* *//////////////////////////////////////////////
// function chai(){
//     let username = "riti"
//     console.log(this.username);
    
// }
// chai()


// const chai = function (){
//     let username = "ritik"
//     console.log(this.username);
    
// }
// chai()



const chai =  () => {
    let username = "ritik"
    console.log(this.username);
    
}
// chai()



// ???Arrow function 


// const addTwo = (num1,num2) => {
//     return num1+ num2
// }
// console.log(addTwo(3,4));



//Implicit Return  
// if we don't use return keyword we have to use paranthesis

// const addTwo = (num1,num2) =>  (num1+ num2)

const addTwo = (num1,num2) =>  ({username: "ritik"})

console.log(addTwo(3,4));



const myarray = [1,32,4,5,]
myarray.forEach()
console.log(myarray);
