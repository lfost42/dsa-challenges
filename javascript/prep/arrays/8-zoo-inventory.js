//Define a function, zooInventory, that accepts a multi-dimensional array of 
//animal facts.

//zooInventory should return a new, flat array of strings. Each element in 
//the new array should be a sentence about each of the animals in the zoo.

/*
let myZoo = [
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Phil', ['groundhog', 11]]
];

zooInventory(myZoo);
 => ['King Kong the gorilla is 42.',
       'Nemo the fish is 5.'
       'Punxsutawney Phil the groundhog is 11.']
*/


//Hint: nested for-loops are not necessary to complete this problem. This 
//would be a great time to use template literals, also known as string 
//interpolation.

const zooInventory = (animalFacts) => {
  let newArray = [];
  for (let i = 0; i < animalFacts.length; i++) {
    let animal = animalFacts[i];
    let animalName = animal[0];
    let animalType = animal[1][0];
    let animalAge = animal[1][1];
    let fact = `${animalName} the ${animalType} is ${animalAge}.`;
    newArray.push(fact);
  }
  return newArray;
}

//First we determine the value of each item in the array and nested arrays.
//Then we identify each piece of the sentence. String interpolation is used
//to build the sentence. Then the sentence is pushed to the newArray.