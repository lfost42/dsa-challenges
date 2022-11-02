"""
PROBLEM

Write a function, uncompress, that takes in a string as 
an argument. The input string will be formatted into
multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of 
the string where each 'char' of a group is repeated
'number' times consecutively. You may assume that the 
input string is well-formed according to the previously 
mentioned pattern.

test_00:

uncompress("2c3a1t") # -> 'ccaaat'
test_01:

uncompress("4s2b") # -> 'ssssbb'
test_02:

uncompress("2p1o5p") # -> 'ppoppppp'
test_03:

uncompress("3n12e2z") # -> 'nnneeeeeeeeeeeezz'
test_04:

uncompress("127y") # -> 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

SOLUTION
"""

def uncompress(s):
  numbers = '0123456789'
  result = []
  i = 0
  j = 0
  while j < len(s):
    if s[j] in numbers:
      j += 1
    else:
      num = int(s[i:j])
      result.append(s[j] * num)
      j += 1
      i = j
  return ''.join(result)


"""
EXPLANATION

We will be returning a string that will repeat the 
character as many times as the integer preceding it.

We set up the problem with variables we know we'll need 
during the runtime of this function. We'll start with an 
empty string and return a string. Then declare constants 
to equal a string of all the possible values for number 
and letter. From here we need indices to keep track of 
either number (i) or letter (j) and initialize them to 0. 
Then we'll begin a while loop to iterate until the length 
of the input string. 

Parsing the the number: if character is in numbers, 
increment j. Else, slice the number from i to (and not 
including) j; cast the string as a number and assign it
the label 'num'. Loop through the value of num to return
that number of iterations by taking the result string and 
concatenating s[j]. 

To reset the pointers, increment j and set i to equal j. 

To improve efficiency, we refactor the result to initiate 
to an empty array and join the array into a string when 
the result is returned. 
"""
