"use strict";
function removeDuplicate(arr) {
    const n = arr.length;
    const freq = {};
    for (let i = 0; i < n; i++) {
        if (freq[arr[i]]) {
            freq[arr[i]]++;
        }
        else {
            freq[arr[i]] = 1;
        }
    }
    // Return only unique values
    return Object.keys(freq).map(Number);
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
