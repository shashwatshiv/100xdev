/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
  str = str.replace(/\s/g, "");
  str = str.toLowerCase().trim();
  let orgStr = str;
  let arr = str.split("");

  for (let i = 0; i < arr.length / 2; i++) {
    let c;
    c = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = c;
  }
  str = arr.join("");
  if (orgStr == str) return true;
  else return false;
}

module.exports = isPalindrome;
