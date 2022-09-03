//Define a function greeting that accepts an optional string 
argument called name. greeting should return a personalized 
string if the name is present.

function greeting(name) {
  let greeting = 'Hello';
  return greeting + (name !== undefined ? `${name}!` : '!')
}

//The string will return 'Hello name!' if the greeting includes 
a name and just 'Hello!' if the name is undefined (instead of 
'Hello undefined!').
