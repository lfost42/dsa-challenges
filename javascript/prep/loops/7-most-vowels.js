/*Define a function, mostVowels, that accepts one argument, a 
string of words.

mostVowels should return the word that has the most vowels. 
mostVowels('I am a keeper with some real rhythms'); // => keeper

If none of the words have any vowels, return an empty 
string.mostVowels('try my gym'); // => ''
*/

// function mostVowels(words) {
//   let wordArray = [];
//   wordArray = words.split(' ');  
  
//   let max = wordArray[0];
//   for (let i = 0; i < wordArray.length; i++) {
//     let current = wordArray[i];
//     if (Array.from(wordArray[i]).filter(letter => 'aeiou'.includes(letter)).length > Array.from(wordArray[0]).filter(letter => 'aeiou'.includes(letter)).length) {
//       max = current;
//     }
//   }
//   if (Array.from(max).filter(letter => 'aeiou'.includes(letter)).length !== 0) {
//       return max;
//     } else {
//       return '';
//     }
// }

/*
We first split the words into an array and initiate the variable 
max to contain the first word in the new array. Then we iterate 
through each word while counting how many vowels are in each. 
When the loop discovers a word with more vowels than max, it is 
replaced with that word. Finally, we check whether max has vowels 
and return an empty string if it does not. Otherwise we return 
the word.
*/

function mostVowels(sentence) {
  let vowels = "aeiouAEIOU";
  let str = "";
  let mostVowels = 0;
  let currentWord = "";
  let currentVowel = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length-1) {
      if (mostVowels < currentVowel) {
        mostVowels = currentVowel;
        str = currentWord;
      }
      currentWord = "";
      currentVowel = 0;
    } else {
      currentWord += sentence[i];
      if (vowels.includes(sentence[i])) {
        currentVowel++;
      }
    }
  }
  return str;
}
/*
First we create variables for str, mostVowels, currentWord 
(index), and currentVowel (index). A for loop iterates through 
each word in the sentence. 
*/
