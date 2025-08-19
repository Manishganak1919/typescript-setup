"use strict";
function movelastkEleToFront(arr, k) {
    let n = arr.length;
    //first extract the last k elements
    let lastK = arr.slice(n - k);
    //second extract 0 to n-k
    let startarr = arr.slice(0, n - k);
    return lastK.concat(startarr);
}
console.log(movelastkEleToFront([1, 2, 3, 4, 5], 2));
