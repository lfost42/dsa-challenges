/* PROBLEM */
/*
Given two strings s and t, return true if t is an anagram of s, 
and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters 
of a different word or phrase, typically using all the original 
letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 
Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

/* SOLUTION */
var isAnagram = function (s, t) {
	let count = {};

	for (let ltr of s.toLowerCase()) {
		if (!(ltr in count)) {
			count[ltr] = 0;
		}
		count[ltr]++;
	}

	for (let ltr of t.toLowerCase()) {
		if (ltr in count) {
			count[ltr]--;
		} else {
			return false;
		}
	}

	for (let ltr in count) {
		if (count[ltr] !== 0) {
			return false;
		}
	}
	return true;
};

/* EXPLANATION*/
/*
Our function accepts two strings as arguments. We return true if 
the words are anagrams and false if they are not. 

We declare a variable count and set it equal to an empty object. 
Then we iterate through each character and increment the 
character key(char) for each instance of that character. 

If char is not in count, we add the char to the object. Outside 
the loop we iterate count at char every time it is located. 

To check that each character map for t is also in s, we will 
iterate through each char of t. If char is in count, we decrement 
the count for that letter. 

If the count has ltr keys in it, we return false because it is 
not an anagram. If none of our conditions are caught, we return 
true because we have an anagram.  
*/
