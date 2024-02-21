/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  console.log(str1.sort());
  JSON.stringify(str1, "");
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  arr1.sort();
  arr2.sort();

  console.log(JSON.stringify(arr1));
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else return false;
}
// another method is to join the array and create a string after sorting it
// arr1.join("");
let to = isAnagram("sdfasdjf adsfs", "sdfsd");
module.exports = isAnagram;
