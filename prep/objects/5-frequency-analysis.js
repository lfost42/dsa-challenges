/*
Define a function frequencyAnalysis that accepts a string of lower-case letters as an argument. frequencyAnalysis should return an object containing the amount of times each letter appeared in the string. frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
*/
const frequencyAnalysis = (str) => {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!freq[char]) {
      freq[char] = 1;
    }
    else {
      freq[char]++;
    }
  }
  return freq;
}
/*
First we instantiate a variable freq to an empty dictionary. Then a for loop iterates 
through each character in our input string: str. If char does not yet exist, it is added 
to our dictionary with the value of 1. If it does exist, we increment the value of freq 
with key char by 1. 
*/