/*
Define an object, me, that has a name property and a getGreeting method. getGreeting should return a greeting.
console.log(me.name); // 'Kat'
me.getGreeting(); // => 'Hi, my name is Kat.'
*/

let me = {
  name: 'Kat',
  getGreeting: getGreeting = () => {
    return `Hi, my name is ${me.name}.`;
  }
}

/*
First we create an object called me. Then we create a function
and return a string interpolation to return the value of 
this.name.
*/
