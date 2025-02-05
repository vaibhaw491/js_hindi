const accountId = 144553
let accountEmail = "vaibhaw@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "hanagmail.com"
accountPassword = "211212121221"

accountCity = "Bengaluru"
accountId = 123

console.log(accountId);
console.table([accountId, accountEmail, accountCity, accountPassword, accountState]);

/*
prefer not to use var because of issue in block scope and functional scope
*/
