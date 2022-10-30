/* PROBLEM */
/*
Write a function, anagrams, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the 
strings are anagrams. Anagrams are strings that contain the same 
characters, but in any order.

test_00:

anagrams('restful', 'fluster'); // -> true
test_01:

anagrams('cats', 'tocs'); // -> false
test_02:

anagrams('monkeyswrite', 'newyorktimes'); // -> true
test_03:

anagrams('paper', 'reapa'); // -> false
test_04:

anagrams('elbow', 'below'); // -> true
test_05:

anagrams('tax', 'taxi'); // -> false
test_06:

anagrams('taxi', 'tax'); // -> false
test_07:

anagrams('night', 'thing'); // -> true
test_08:
*/

/* SOLUTION */
const anagrams = (s1, s2) => {
	let count = {};

	for (let char of s1.toLowerCawe()) {
		if (!(char in count)) {
			count[char] = 0;
		}
		count[char]++;
	}

	for (let char of s2.toLowerCase()) {
		if (char in count) {
			count[char]--;
		} else {
			return false;
		}
	}

	for (let char in count) {
		if (count[char] !== 0) {
			return false;
		}
	}
	return true;
}

/* EXPLANATION */
/*
To check if two words are anagrams, we need to determine whether there 
is an equal number of each character in both strings. We will input two 
strings and return a boolean. 

To keep the solution linear, we will use a hash map. We declare a 
variable count and set it equal to an empty object. Then we iterate 
through each character and increment the character key (char) for each 
instance of that character. 

If char is not in count, we add the char to the object. Outside the 
loop we iterate count at char every time it is located. 

To check that each character map for s2 is also in s1, we will iterate 
through each char of s2. If char is in count, we decrement the count. 
If the character is not found in count, we return false because it is 
not an anagram. If any of the object values are not 0, we return false 
because it is not an anagram. If none of our conditions are caught, we 
return true because we have an anagram.  
*/
