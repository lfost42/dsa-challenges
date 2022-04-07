/*
Create a new object, me2. Like the previous problem Say My Name, this object should contain a name property and a method, getGreeting. However, this time getGreeting should accept an object that contains a name property as an argument.The returned greeting should now greet the other object by name.
console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'
*/

let me2 = {
  name: 'Tarana',
  getGreeting: function(friend) {
    return `Hi ${friend.name}, my name is ${me2.name}.`;
  }
}

/*
First we create an object called me2. Then we create a function
that accepts an argument for friend and return a string interpolation 
to calls the value of friend.name and me2.name.
*/
