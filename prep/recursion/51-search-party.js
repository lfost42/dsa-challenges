/*
Define a function, searchParty, that accepts 2 arguments:
name (string)
world (object)
The keys in world represent a location. The values can be any combination of strings, arrays, or other objects.
Search through world for name. If name exists in world, return an array with directions. Return null if you can't find name.
let world = {
  'Fullstack': {
    '11th floor': 'Marge',
    '25th floor': 'Francis'
  },
  'Subway': ['Jackie', 'Grumio']
};

searchParty('Francis', world); // => ['Fullstack', '25th floor']
searchParty('Franco', world); // => null
*/

const searchParty = (name, world) => {
  for (let key in world) {
    if (typeof world[key] === "string") {
      if (world[key] === name) {
        return [key];
      } 
    } else if (Array.isArray(world[key])) {
      if (world[key].includes(name)) {
        return [key];
      }
    } else {
      let nestedKey = searchParty(name, world[key]);
      if (nestedKey) {
        return [key, ...nestedKey];
      } 
    }
  }
  return null;
}

/*
We create a function and pass in the arguments name and world. We search each key in world for a string. If the key in world is equal to name, we return the key array. If the key is not a string, we check for arrays. If the array includes name, we return the key array. If the key is not a string or key, it's an object. We set a variable nestedKey and set it equal to the evaluated result of invoking the searchPart function and passing in name and world at key parameters. If nestedKey is found, we return they key and concatenate the nested key so that it returns the array result. If none of the above is found, we exit the for loop and return none. 
*/