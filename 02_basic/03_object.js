// singleton
// Object.create

//Object Literals

const mySym = Symbol("key1")

const jsUser = {
name: "Ritik",
"full Name":"Ritik Singh",
[mySym]: "myKey1",
age:20,
location: "MIrzapur",
email: "Ritik9956730@gamil.com",
isLoggedIn:false,
lastLoginDays: ["Monday","Tuesday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full Name"]);
// console.log( jsUser[mySym]);


jsUser.email = "sanu@99"
// console.log(jsUser.email);

// Object.freeze(jsUser)
jsUser.email = "hugygfyeg@00"

// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
