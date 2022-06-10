/*
Define a function, dogBreeder, that accepts up to two optional arguments:
name (string)
age (number)
dogBreeder should return an object that represents a new dog! If the user doesn't define a name, assume the dog's name is 'Steve'. If the user doesn't define the dog's age, assume the dog's age is 0.
dogBreeder('Sam', 12) // => {name: 'Sam', age: 12}
dogBreeder(15) // => {name:'Steve', age: 15}
*/

const dogBreeder = (name = 'Steve', age = 0) => {
  if (typeof name === "number") {
    age = name;
    name = "Steve";
  }
  return {
    name,
    age
  }
}

/*
First we set default values for name and age if they are undefined.
Then we check if only number is passed in, identified as name. If
name is passed in as a number, we set age to name and name to "Steve".
Then we return the object {name, age}.
*/