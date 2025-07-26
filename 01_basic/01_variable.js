const accountId = 144553
let accountEmail = "ritik9978@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
// accountId = 2   //not allow

console.log(accountId);
accountEmail = "sanu@57767"
accountPassword = "9876"
accountCity = "mirzapur"
let accountState; //variable declare but value not define


/*
prefer not to use var 
because of issu in functional scope and block scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
