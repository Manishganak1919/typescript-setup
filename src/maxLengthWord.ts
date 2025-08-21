function findMaxlengthWord(str: string): number {
  let Eachword: string = "";
  let currLength: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      currLength = Math.max(currLength, Eachword.length);
      Eachword = "";
    } else {
      Eachword += str[i];
    }
  }
  if (Eachword !== "") {
    currLength = Math.max(currLength, Eachword.length);
  }
  return currLength;
}

let input: string = "I love programming in TypeScript";
console.log(findMaxlengthWord(input));
