//Premitive

// 7 Types==> String , Number, NUll, Undefined, symbol,  BIgInt, Boolean

// JavaScript is a dynamically typed language.This means that the type of a variable is determined at runtime based on the value it holds, rather than being explicitly declared during compilation. 

const score= 100
const scoreValue= 100.3

const isLoggedIn= false
const outSideTemp= null  //Object
let userEmail;
console.log(userEmail);


const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId);
console.log(id);


const bigNumber = 344656376488735689643n
console.log( typeof bigNumber);


//Reference Type (Non Premitive)

// Array, Object, Functions

const heros = ["Shaktiman", "Nagraj", "Doga"]
console.log(typeof heros); //Object


let myObj= {
Name: "Ritik",
Age: 22,

}
console.log(myObj);



const myFunction = function(){ 
    console.log("hello World");
    
}
console.log(typeof myFunction);



////************************************************************************
//  Stack Memory(Premitive),
//  Heap Memory (Non- Premitive)


let myYoutubename = "Patel_ritikyoutubedotcom"

let anotherName= myYoutubename
anotherName= "sanuyoutube.com"

console.log(myYoutubename);

console.log(anotherName);


let userOne= {
    email: "Ritik9956730@gmail.com" ,
    upi: "ritik9956@axl"

}

let userTwo= userOne

userTwo.email = "sanu@9978"

console.log(userOne.email);
console.log(userTwo.email);
