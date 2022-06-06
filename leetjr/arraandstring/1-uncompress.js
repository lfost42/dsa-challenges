/* PROBLEM */

/*
Write a function, uncompress, that takes in a string as 
an argument. The input string will be formatted into 
multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of the 
string where each 'char' of a group is repeated 'number' 
times consecutively. You may assume that the input string 
is well-formed according to the previously mentioned 
pattern.

test_00:
uncompress("2c3a1t"); // -> 'ccaaat'
test_01:
uncompress("4s2b"); // -> 'ssssbb'
test_02:
uncompress("2p1o5p"); // -> 'ppoppppp'
test_03:
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz' */

/* SOLUTION */
const uncompress = (s) => {
  const numbers = '0123456789';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let result = [];
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j++
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        result.push(s[j])
      }
      j++;
      i = j;
    }
  }
  return result.join('');
};

/* EXPLANATION */
/*
Our parameters involve a string of characters of two 
types: an integer and a letter. The letter following the 
integer needs to be repeated as many times as the number 
preceding it. There will be a varying number of groups 
that need to be parsed into uncompressed forms. 

We will be returning a string that will repeat the 
character as many times as the integer preceding it.

We set up the problem with variables we know we'll need 
during the runtime of this function. We'll start with an 
emtpy string and return a string. Then declare constants 
to equal a string of all the possible values for number 
and letter. From hwere we need indices to keep track of 
either number (i) or letter (j) and initiate them to 0. 
Then we'll begin a while loop to iterate until the length 
of the input string. 

Parse the the number: if character is in numbers, 
increment j. Else, slice the number from i to (and not 
including) j, cast it as a number and assign it a label 
'num'. Loop through the value of num to return that 
number of iterations by taking the result string and 
concatenating s[j]. 

To reset the pointers, increment j and set i to equal j. 

To improve efficiency, we refactor the result to initiate 
to an empty array and join the array into a string when 
the result is returned. 
*/
