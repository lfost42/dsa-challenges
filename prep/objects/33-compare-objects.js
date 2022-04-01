/*
Define a function, compareObjects, that accepts two objects as arguments.
compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, compareObjects should return false. Assume the objects are not nested.

compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true
compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
*/

const compareObjects = (object1, object2) => {
  for(let key in object1) {
    if (object1[key] !== object2[key]) return false;
  }
  for(let key in object2) {
    if (object1[key] !== object2[key]) return false;
  }
  return true;
}

/*
First we check the key in object1 to return false if either the object1 or object2 keys are false. Then we check they key in object2 to return false if either the object1 or object2 keys are false. If neither condition is met, the function returns true. 
*/