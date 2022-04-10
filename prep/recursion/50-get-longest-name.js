/*
Write a function, getLongestName, that accepts an object as an argument. The object represents a family tree. Return the longest name in the family.

let family = {
  'Beverly Marquez': {
    'Nina Rhone': {
      'William Rhodes': null,
      'Paul Nell': null,
      'Sir Paddington the Fourth, of the county Wilstonshire': null
    }
  }
};
getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'
*/

const getLongestName = (family) => {
  let longestName = '';
  for (let name in family) {
    if (name.length > longestName.length) {
      longestName = name;
    }
    if(family[name]) {
      let nestedName = getLongestName(family[name]);
      if (nestedName > longestName) {
        longestName = nestedName;
      }
    }
  }
  return longestName;
}

/*
Our function takes in one argument as an object called family. We create a variable longestName and initialize it as an empty string. Then we check each name in family. If the name checked is greater than family, we replace the longestName with the name. Then we check each object that locates a family with name key. If the nestedName is greater than longestName, it is replaced with the longestName. Once the loop scope closes, we return longestName.
*/