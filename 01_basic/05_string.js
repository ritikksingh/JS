const name= "Ritik"
const repoCount= 50

// console.log(name+repoCount+"value");


console.log(`Hello my Name is ${name} and my repocount is ${repoCount}`);



const gameName = new String("Ritiksi")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.slice(-3,-1));
console.log(gameName.substring(0,6));


const newStringOne= "    Sanu  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https:ritik.com/ritik%30Singh"

console.log(url.replace("%30",'_'));

console.log(url.includes('ritik'));
