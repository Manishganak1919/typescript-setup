function findLargest(arr: number[]): number {
  const n = arr.length;
  let maxEle = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > maxEle) {
      maxEle = arr[i];
    }
  }
  return maxEle;
}
console.log(findLargest([3, 7, 2, 9, 5]));
