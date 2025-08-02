// Immediately Invoked Function Expression (IIFE)

(function chai (){

    console.log("Db Connected");
    
})();   //to run next code we have to write semicolon ; 



// ( function code(){

//   // named iifi

//     console.log('Db Connected TWo');
    
// })()

(  (name) =>{
    console.log(`Db Connected TWo ${name}`);
    
})('ritik')