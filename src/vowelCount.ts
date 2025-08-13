function CountVowelInstring(str: string): number {
  const n = str.length;
  const vowel = ["a", "e", "i", "o", "u"];
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (vowel.includes(str[i].toLocaleLowerCase())) {
      cnt++;
    }
  }
  return cnt;
}
console.log(CountVowelInstring("Hello World"));
