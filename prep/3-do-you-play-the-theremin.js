//Define a function doYouPlayTheTheremin that accepts a string as an argument. 
//doYouPlayTheTheremin should return true if the inputted string starts with the letters s or S.
//Otherwise, doYouPlayTheTheremin should return false.

function doYouPlayTheTheremin(str) {
  return str[0].toLowerCase() === "s";
}

//The logical operation sets the string to lower case and checks if it starts with 's'.