"""
PROBLEM

Write a function, compress, that takes in a string as an argument. The function 
should return a compressed version of the string where consecutive occurrences 
of the same characters are compressed into the number of occurrences followed by 
the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
You can assume that the input only contains alphabetic characters.

test_00:

compress('ccaaatsss') # -> '2c3at3s'
test_01:

compress('ssssbbz') # -> '4s2bz'
test_02:

compress('ppoppppp') # -> '2po5p'
test_03:

compress('nnneeeeeeeeeeeezz') # -> '3n12e2z'
test_04:

compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
# -> '127y'

SOLUTION
"""

def compress(s):
  s += '!'
  result = []
  i = 0
  j = 0
  while j < len(s):
    if s[i] == s[j]:
      j += 1  
    else:
      num = j - i
      if num == 1:
        result.append(s[i])
      else:
        result.append(str(num)) 
        result.append(s[i])
      i = j
    
  return ''.join(result)


"""
EXPLANATION

For this problem, we have groups of letter characters. Our goal is to return a 
string that compresses each group of like-letter to a number representing the 
number of letters there were in the input string followed by the letter. 

We will parse the string and return a string so we'll declare a variable and 
assign it the label result and initialize it to the value of an empty string. We 
also start with two pointers to keep track of our indices: i and j. I will keep 
track of the current streak and j will look for the end of the streak. So when i 
and j are equal, we will increment j. When a streak is terminated, i will not 
equal j. 

When we reach the end of our streak, num will be j minus i and we can 
concatenate teh result variable with num and the character s at index i. 

To resume the following streak, we set i to equal j. 

We add a conditional to the string result to prevent singletons from including 
the number. We do this by only concatenating s at index i if num equal 1. 

To allow the final streak to parse, we change the while conditional for j to 
continue until it is less than or equal to s.length (may not be able to do this 
with other languages).

To optimize the strategy to linear run time, we refactor the input to an empty 
array and join the array into a string. Instead of concatenating the string, we 
will push the characters into the array, then return as an array. 
"""
