"use strict";
function findMaxlengthWord(str) {
    let Eachword = "";
    let currLength = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            currLength = Math.max(currLength, Eachword.length);
            Eachword = "";
        }
        else {
            Eachword += str[i];
        }
    }
    if (Eachword !== "") {
        currLength = Math.max(currLength, Eachword.length);
    }
    return currLength;
}
let input = "I love programming in TypeScript";
console.log(findMaxlengthWord(input));
