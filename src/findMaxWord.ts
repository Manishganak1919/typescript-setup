function findMaxWordinSent(str: string): string {
  let ans = "";
  let MaxWord = "";
  let currLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (MaxWord.length > currLength) {
        currLength = MaxWord.length;
        ans = MaxWord;
      }
      MaxWord = "";
    } else {
      MaxWord += str[i];
    }
  }

  // ✅ check last word
  if (MaxWord.length > currLength) {
    ans = MaxWord;
  }

  return ans;
}

const inputSentence: string = "I love prog in Typescript";
console.log(findMaxWordinSent(inputSentence)); // Typescript
