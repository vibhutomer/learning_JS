const accountId = 12345
let accountEmail = "vibhu@example.com" //has scope, so used so much.
var accountPassword = "Password" //No scope (can be changed and used anywhere) so problematic.
accountCity = "Ghaziabad"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

//accountId = 25 //Not possible since it is const
console.log(accountId);

accountEmail = "vi@test.com" //Possible
console.log(accountEmail);

accountPassword = "Hii" //Possible
console.log(accountPassword);

accountCity = "Meerut" //Possible
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);