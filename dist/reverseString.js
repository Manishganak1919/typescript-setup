"use strict";
const str = "Manish";
function ReverseStr(str) {
    const n = str.length; // n = 6
    let ans = "";
    for (let i = n - 1; i >= 0; i--) {
        ans = ans + str[i];
    }
    return ans;
}
console.log(ReverseStr(str));
