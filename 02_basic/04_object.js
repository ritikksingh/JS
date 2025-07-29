// const tinderUser = new Object()  //singleton Object
const tinderUser = {}  //Non-singleton Object

 tinderUser.id = "123abc"
 tinderUser.name = "sanu"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "ritik@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ritik",
            LastName: "Singh"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const Obj1 = { 1:"a", 2:"b"}
const Obj2 = {3:"a", 4:"b"}
// const obj3 = { Obj1,Obj2}

// const obj3 = Object.assign({},Obj1,Obj2)

const obj3= {...Obj1, ...Obj2}

// console.log(obj3);


const users =[{
    id:1,
    emial:"efdeg@557"
},
{
    id:1,
    emial:"efdeg@557"
},
{
    id:1,
    emial:"efdeg@557"
}
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
