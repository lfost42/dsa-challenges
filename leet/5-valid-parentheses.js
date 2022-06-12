/* PROBLEM */
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

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
var isValid = function(s) {
	const stack = [];
	const map = { 
		')' : '(', 
		'}' : '{', 
		']' : '[' 
	};
	for (const bracket of s) { 
	  if (!map[bracket]){
		 stack.push(bracket); 
	  } 
	  else if (stack[stack.length-1] === map[bracket]){
		  stack.pop()
	  }  else {
		  return false;
	  }
	}
	return stack.length == 0;
  };
  
  /* EXPLANATION*/
  /*
  Our function takes in a combination of opening and closing brackets. We return true of the opening brackets are closed with the correct type of bracket and in the correct order. 
  
  We declare a variable stack and set it equal to an empty array. We declare a variable map and set it equal to an object with pairs of matching brackets. 
  
  We loop through the string s. If the bracket is not a pair, we push the bracket to the map. If the bracket makes up a pair and matches the last character in the string, we pop it off the map. If the bracket does not make a pair with the last character of the string, we return false. 
  
  Outside of the loop, we return true if the hashmap is empty and false if it is not. 
  */
  
  // adjusts for input with characters that are not brackets
  
  // var isValid = function(s){
  //   const stack = [];
  //   const map = { 
  //       ')' : '(', 
  //       '}' : '{', 
  //       ']' : '[' 
  //   };
  //   const open = '({[';
  //   const close = ')}]'
  //   for (const bracket of s) { 
  //     if (open.includes(bracket)) {
  //        stack.push(bracket);
  //     } else if (close.includes(bracket)) {
  //       if (stack.length == 0) {
  //         return false;
  //       }
  //       if (stack[stack.length - 1] === map[bracket]) {
  //         stack.pop()
  //       } else {
  //         return false;
  //       }
  //     }
  //     console.log(stack)
  //   }
  //   return stack.length == 0;
  // };