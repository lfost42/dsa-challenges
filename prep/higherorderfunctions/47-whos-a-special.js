/* Write a function whosASpecial that takes an array of pets as an argument and returns a string confirming what you already knew: all of the pets are very special! Feel free to add your own special pets to the array! Use .forEach in your answer.
```
let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];

whosASpecial(specialPets);
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!
```
*/

const whosASpecial = (array) => {
  let result = [];
  array.forEach((pet) => {
    result.push(`${pet.name} the ${pet.species} is very special!`);
  })
  return result.join(" ");
}

/* We create a variable result and set it equal to an empty array. We use forEach to loop through the array that calls an anonymous function. The anonymous function pushes the formatted sentence into the result array, using pet to call the name and species of the pet object. We use the join method to return the result array as a string with a space in between each item in the array. */