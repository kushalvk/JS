const accountID = 1234567
let accountEmail = "kushal@google.com"
var accountPassword = "777"
accountCity = "Surat"
let accountState;// undefined

// accountID = 2 // not allowed(constant variable)

accountEmail = "kv@gmail.com"
accountPassword = "714714"
accountCity = "ahmedabad"

console.log(accountID);

/*
    prefer not to use "var"(variable)
    because of issue in block scope and functional scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])