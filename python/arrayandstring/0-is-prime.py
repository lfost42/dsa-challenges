# PROBLEM

"""
Write a function, is_prime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer.
"""

from math import sqrt, floor

def is_prime(n):
  if n == 2:
    return True
  if (n < 2) or (n % 2 == 0):
    return False
  
  for i in range(3, floor(sqrt(n)) + 1, 2):
    if n % i == 0:
      return False
                 
  return True

"""
EXPLANATION

If n is 2, return True. If n is less than 2 or n is even, return false. Our for loop checks every odd number from 3 until the square root of n whether our iterator is divisible by n. If it is, we return False. If we exit the loop, we return True. 
"""
