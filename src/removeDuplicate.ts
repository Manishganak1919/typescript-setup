function removeDuplicate(arr: number[]): number[] {
  const n: number = arr.length;
  const freq: { [key: number]: number } = {};

  for (let i = 0; i < n; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }

  // Return only unique values
  return Object.keys(freq).map(Number);
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
