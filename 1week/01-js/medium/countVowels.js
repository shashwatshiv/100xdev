/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let counter = 0;
  let letters = str.toLowerCase().split("");
  for (const letter of letters) {
    if (
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "u"
    )
      counter++;
  }
  return counter;
}

module.exports = countVowels;
