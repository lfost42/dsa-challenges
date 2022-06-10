//Define a function, crazyCaps, that accepts a string as an argument. 
//crazyCaps should return a string in which every other character is capitalized. 
//The first letter should be lower-cased.

function crazyCaps(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 1) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

//The first letter is at index 0 so we set all letters with an odd index to uppercase.