"use strict";
function matrixToList(matrix) {
    //size of the matrix
    const n = matrix.length;
    //create empty adjlist
    const adjlist = Array.from({ length: n }, () => []);
    //traversing the row
    for (let i = 0; i < n; i++) {
        // traversing the column
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] !== 0) {
                adjlist[i].push(j);
            }
        }
    }
    return adjlist;
}
const matrix = [
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
];
const resultList = matrixToList(matrix);
console.log("adj list from matrix is ", resultList);
