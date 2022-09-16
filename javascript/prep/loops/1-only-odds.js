/* Define a function, onlyOdds, that accepts a number as an 
argument. 
onlyOdds should should return the sum of all the odd numbers 
between 1 and the given number.
If onlyOdds receives an argument less than 1, it should 
return 0. */

function onlyOdds(num) {
  let total = 0;
  for (let i = 0; i < num; i++) {
    if (i % 2 === 1) {
      total += i;
    }
  }
  return total;
}
