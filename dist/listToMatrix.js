"use strict";
function listToMatrix(adjList) {
    const n = adjList.length;
    const adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));
    // Traverse adjacency list to fill matrix
    for (let i = 0; i < n; i++) {
        for (const neighbor of adjList[i]) {
            adjMatrix[i][neighbor] = 1;
        }
    }
    return adjMatrix;
}
// Example adjacency list
const adjList = [
    [1, 2], // Node 0 connected to 1 and 2
    [0], // Node 1 connected to 0
    [0], // Node 2 connected to 0
];
// Call the function
const resultMatrix = listToMatrix(adjList);
// Print the result
console.log("Adjacency Matrix:");
console.log(resultMatrix);
