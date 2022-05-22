/*
Remember the dog breeder question from an earlier workshop? It assumed that the default name for a dog should be 'Steve', and the default age should be 0.

Define a function, getDogBreeder, that takes a default name and age, and returns a dogBreeder function. The returned dogBreeder function should use the default values defined when dogBreeder was called.

You can copy over the solution code from the original dogBreeder problem if you'd like.
```
// Original dogBreeder solution
function dogBreeder(name='Steve', age=0) {
  if (typeof name === 'number') {
    age = name;
    name = 'Steve'
  }

  let newDog =  {
    name: name,
    age: age
  };

  return newDog;
}
```
*/
// SOLUTION
const getDogBreeder = (defaultName, defaultAge) => {
  const dogBreeder = (name=defaultName, age=defaultAge) => {
    if (typeof name === 'number') {
      age = name;
      name = defaultName;
    }

    let newDog =  {
      name: name,
      age: age
    }
    return newDog;
  }
  return dogBreeder;
}

/*
We create a function getDogBreeder that passes in two arguments: defaultName and defaultAge. Within scope, we adjust the original function to set the default name to defaultName and default age to defaultAge. We also update the if parameter that sets name to the value of defaultName when only a number is passed in as an argument and return the invocation of the dogBreeder function. 
*/