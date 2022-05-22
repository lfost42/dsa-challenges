/*
Write a function petSounds that takes an animal name and a country name as arguments.
Using the globally-defined animalNoises array, petSounds should return a sentence that explains which sound the animal makes in the given country.
petSounds('dog', 'Iceland'); // => Dogs in Iceland say Voff voff!
petSounds('cat', 'Korea'); // => Cats in Korea say Nyaong!
*/
let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

// YOUR CODE BELOW
let sound;
const petSounds = (animal, country) => {
    for (let i = 0; i < animalNoises.length; i++) {
    let animalObject = animalNoises[i];
      if (animal in animalObject) {
        let animalSound = animalObject[animal];
        sound = animalSound[country];
      }
    }
  return `${animal.charAt(0).toUpperCase() + animal.slice(1)}s in ${country} say ${sound}`;
}
/*
Our main challenge is extracting the proper sound from the animalNoises dictionary. The for loop first iterates through each object in animalNoises. We instantiate the variable animalSound to the evaluated result of the animalObject with a key of our input string: animal. Then we instantiate the variable: sound to the evaluated result of animalSound with the key of our input: country. String interpolation is used to return the required formatted sentence. 