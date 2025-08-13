"use strict";
function isPalindrome(str) {
    const n = str.length;
    let ans = "";
    for (let i = n - 1; i >= 0; i--) {
        ans = ans + str[i];
    }
    if (ans !== str) {
        return false;
    }
    return true;
}
console.log(isPalindrome("madam"));
