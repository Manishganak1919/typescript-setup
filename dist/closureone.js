"use strict";
function outer() {
    let name = "Manish"; //variable in outer function
    function inner() {
        console.log(`Hello ${name}`); //inner function can access outer function's variable
    }
    inner();
}
outer();
