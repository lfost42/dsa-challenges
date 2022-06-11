/* PROBLEM */
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

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
public class Solution {
    public bool IsAnagram(string s, string t) {
        HashSet<char> count = new();      
		foreach (char ltr in s.ToLower()) {
			if (!(count.Contains(ltr))) {
                count.Add(ltr);
            }
		}
        
        foreach (char ltr in t.ToLower()) {
            if (count.Contains(ltr)) {
                count.Remove(ltr);
            }
        }
        return (count.Count == 0);
    }
}
/* EXPLANATION*/
/*
Our function accepts two strings as arguments. We return true if the words are anagrams and false if they are not. 

We declare a variable count and set it equal to an empty HashSet. We iterate through each character of s and add the character to our hash set. 

We iterate through each character of t. If the ltr is in count, we remove the ltr from our hash set. 

We return true if our HashSet is empty and false if it isn't. 
*/