function isPalindrome(str: string): boolean {
  const n: number = str.length;
  let ans: string = "";
  for (let i = n - 1; i >= 0; i--) {
    ans = ans + str[i];
  }

  if (ans !== str) {
    return false;
  }
  return true;
}
console.log(isPalindrome("madam"));
