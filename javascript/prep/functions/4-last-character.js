//Define a function lastCharacter that accepts two strings as 
arguments. lastCharacter should return true if both strings end 
with the same character. Otherwise, lastCharacter should return 
false.

function lastCharacter(str1, str2) {
  return str1.slice(-1) === str2.slice(-1);
}

// slice(-1) is a string method that checks the last character of 
a string. 
