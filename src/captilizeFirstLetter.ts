//question: capitalizeFirstLetter from Given sentence

function capitalizeFirstLetter(str: string): void {
  if (str.length === 0) {
    return;
  }

  let ans = "";
  for (let i = 0; i < str.length; i++) {
    // First character OR char after space → capitalize
    if (i === 0 || str[i - 1] === " ") {
      ans += str[i].toUpperCase();
    } else {
      ans += str[i];
    }
  }

  console.log(ans);
}

const initialStr = "hello world from typescript";
capitalizeFirstLetter(initialStr);
