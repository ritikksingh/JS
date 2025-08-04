// for of

// [""," ",""]
//[{},{},{}]
const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}


const greetings = "hello"
for (const greet of greetings) {
    // console.log(`Each carr is ${greet}`);
    
}


//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "france")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-', value);
    
}



const myObject = {
    'Game1' : "Nfs",
    'Game2' : "Spiderman"
}
for (const [key , value] of myObject) {
    // console.log(key,':-', value);
}

