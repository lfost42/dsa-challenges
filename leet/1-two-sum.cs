/* PROBLEM */
/*Given an array of integers nums and an integer target, return 
an array of the two integers in the array that add up to target.
If there are no integers that add up to the target sum, return
an empty array. 
*/

using System.Collections.Generic;

public class Program {
	public static int[] TwoNumberSum(int[] array, int targetSum) {
		HashSet<int> nums = new HashSet<int>();
        foreach (int element in array) {
            int  complement = targetSum - element;
            if (nums.Contains(complement)) {
                return new int[] {complement, element};
            } else {
                previousNums.Add(element);
            }
        }
        return new int[0];e
    }
}

/* EXPLANATION */
/*
Our function takes in an array and targetSum as arguments. We will
return an array that includes the elements that add up to 
the targetSum. 

We declare a constant nums and assign it the value of a new
HashSet. Ww loop through each element of array. We find the
array's complement by subtracting targetSum from the element.
If the complement is in nums, we return a tuple of the complement 
and element. Else, we add the element to our nums HashSet. If
we do not find a sum, we exit the loop and return an empty
array. 
*/
