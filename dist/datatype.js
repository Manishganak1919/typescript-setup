"use strict";
/** string data type */
let username = "Manish";
let password = "Manish12345@";
console.log(username, password);
/** Number data type */
let age = 22;
let mobile = 6209542809;
console.log(age, mobile);
/** null & undefined */
let emptyval = null;
let notassigned = undefined;
function findUser(id) {
    if (id === 1) {
        return "alice";
    }
    return undefined;
}
const user = findUser(1);
console.log(user);
/* symbol */
const uniqueKey = Symbol("userId");
let user1 = {
    [uniqueKey]: 12345,
};
console.log(user1[uniqueKey]);
