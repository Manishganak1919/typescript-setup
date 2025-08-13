function listToMatrix(adjList: number[][]): number[][] {
  const n: number = adjList.length;
  const adjMatrix: number[][] = Array.from({ length: n }, () =>
    Array(n).fill(0)
  );

  // Traverse adjacency list to fill matrix
  for (let i = 0; i < n; i++) {
    for (const neighbor of adjList[i]) {
      adjMatrix[i][neighbor] = 1;
    }
  }
  return adjMatrix;
}

// Example adjacency list
const adjList: number[][] = [
  [1, 2], // Node 0 connected to 1 and 2
  [0], // Node 1 connected to 0
  [0], // Node 2 connected to 0
];

// Call the function
const resultMatrix: number[][] = listToMatrix(adjList);

// Print the result
console.log("Adjacency Matrix:");
console.log(resultMatrix);
