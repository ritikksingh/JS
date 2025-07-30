// var c= 300
let a=100
if(true){
    let a = 10
    const b = 20
    // console.log("Inner a=" ,a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);



///////*/////////////////////////////////////
//Nested Scope
function one() {
    const userName = "Ritik"

    function two() {
        const website = "youtube"
        console.log(userName);
        
    }
    // console.log(website);
    two()
}
// one()



if (true) {
    const userName = "ritik"
    if (userName === "ritik"){
        const website = " youtube"
        // console.log(userName + website);
        }

}



///* *///////////////// INTERESTING ????//////////////////////

console.log(addOne(5));
 function addOne(num){
    return num+1
}



console.log(addTwo(5));

const addTwo = function(num){ //function Expression
    return num+2
}
