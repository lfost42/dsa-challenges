/* PROBLEM */
/*
Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

test_00:

mostFrequentChar('bookeeper'); // -> 'e'
test_01:

mostFrequentChar('david'); // -> 'd'
test_02:

mostFrequentChar('abby'); // -> 'b'
test_03:

mostFrequentChar('mississippi'); // -> 'i'
test_04:

mostFrequentChar('potato'); // -> 'o'
test_05:

mostFrequentChar('eleventennine'); // -> 'e'
test_06:

mostFrequentChar("riverbed"); // -> 'r'
*/

/* SOLUTION */
const mostFrequentChar = (s) => {
	let count = {};
	let max;
	for (let char of s) {
		if (!(char in count)) {
			count[char] = 0;
		}
		count[char]++;
	}

	let best = null;
	for (let char of s) {
		if (best === null || count[char] > count[best]) {
			best = char;
		}
	}
	return best;
}

/* EXPLANATION */
/*
This function will take in a string as an argument and return the most frequent character of the string. In the event of a tie, we return the first character that appers in that frequency. 

We begin by declaring a variable count and set it equal to an empty object. Then we iterate through each charater and increment the character key for each instance of that character. 

If char is not in count, we add the char to the object. Outside the loop we iterate count at char every time it is located. 

We declare a variable best and initialize it to null. Then we begin another loop through each char of s. If the best is null or count of char is greater than best, we set the value of best to char. 

We return best. 
*/
