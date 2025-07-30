/** string data type */
let username:string = "Manish";
let password:string = "Manish12345@";
console.log(username, password);

/** Number data type */
let age: number = 22;
let mobile:number = 6209542809;
console.log(age, mobile);

/** null & undefined */
let emptyval: null = null;
let notassigned: undefined = undefined;

function findUser(id: number): string | undefined {
    if (id === 1) {
        return "alice";
    }
    return undefined;
}
const user = findUser(1);
console.log(user);

/* symbol */
const uniqueKey:symbol = Symbol("userId");
let user1 = {
    [uniqueKey]: 12345,
}
console.log(user1[uniqueKey]);