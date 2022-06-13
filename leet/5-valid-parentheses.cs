/* PROBLEM */
/*
Given a string s containing just the characters '(', ')', '{', 
'}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/* SOLUTION */
public class Solution {
    public bool IsValid(string s) {
      Stack<char> brackets =  new Stack<char>();
      Dictionary<char, char> map = new Dictionary<char, char>()
        {
            {')', '(' },
            {'}', '{' },
            {']', '[' },
        };
        
	if(string.IsNullOrEmpty(s) || s.Length % 2 != 0)
	{
		return false;
	}
		foreach (char bracket in s) { 
			if (map.ContainsValue(bracket)) {
				brackets.Push(bracket);
			} else {
				if (brackets.Count > 0 && brackets.Peek() == map[bracket]) {
					brackets.Pop();
				} else {
					return false;
				}
			}
      }
      return brackets.Count == 0;
    }
}


/* EXPLANATION*/
/*
Our function takes in a combination of opening and closing 
brackets. We return true of the opening brackets are closed with 
the correct type of bracket and in the correct order. 

We declare a variable brackets and set it equal to an empty 
stack. We declare a variable map and set it equal to a dictionary 
with pairs of matching brackets. 

If the string is empty, null, or does not contain an even number 
of characters, we return false. 

We loop through each bracket in the input string s. If the 
bracket is a dictionary value, we push the bracket to the 
brackets stack. If the stack isn't empty and the bracket's pair 
matches with the last character in teh string, we pop the match 
off the stack. If the bracket's pair does not match a pair with 
the last character of the string, we return false. 

Outside of the loop, we return true if the stack is empty and 
false if it is not. 
*/


/*
//Solution that skips over characters that are not ////brackets.

using System;
using System.Collections;
using System.Collections.Generic;

public class Program {
	public static bool BalancedBrackets(string str) {
      Stack<char> brackets =  new Stack<char>();
      string options = "({[)}]";
      Dictionary<char, char> map = new Dictionary<char, char>()
        {
            {')', '(' },
            {'}', '{' },
            {']', '[' },
        };
        
        if(string.IsNullOrEmpty(str))
        {
            return false;
        }

      foreach (char bracket in str) { 
        if (map.ContainsValue(bracket)) {
            brackets.Push(bracket);
        } else if (map.ContainsKey(bracket)) {
            if (brackets.Count == 0) {
                return false;
            }
            if (!(options.Contains(bracket))) {
                continue;
            }
            if (brackets.Peek() == map[bracket]) {
                brackets.Pop();
            } else {
                return false;
            }            
        }
      }
      return brackets.Count == 0;
    }
}

*/
