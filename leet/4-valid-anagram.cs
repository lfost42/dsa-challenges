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
        Dictionary<char, int> count = new();

        foreach(char ltr in s
                    .ToLower()
                    .ToCharArray()) {
            if (count.ContainsKey(ltr)) {
                count[ltr]++;
            } else {
                count.Add(ltr, 1);
            }
        }

        foreach (char ltr in t
                    .ToLower()
                    .ToCharArray()) {
            if (!count.ContainsKey(ltr)) {
            return false;
            } else if(--count[ltr]==0) {
                count.Remove(ltr);
            }
        }
        return count.Count == 0;
    }
}
/* EXPLANATION*/
/*
Our function accepts two strings as arguments. We return true if the words are anagrams and false if they are not. 

We declare a new dictionary that accepts a char as a key and integer as a value. We assign it a label count. 

We loop through each ltr in string s, we set it to lowercase if it isn't, and convert it to a character array. If the ltr is a key, we increment the value, otherwise we add the ltr and assign it a value of 1. 

We loop through each ltr in string t, we set it to lowercase if it isn't, and convert it to a character array. If the ltr is not a key, we return false because it is not an anagram. If the value is less than 0 after decrementing, we remove the ltr from the dictionary. 

We return a boolean true if there are no values left in our dictionary and false if any remains. 
*/