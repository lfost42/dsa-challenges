/* PROBLEM */
/*
238. Product of Array Except Self
Medium

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 
Constraints:

2 <= nums.length <= 10^5
-30 <= nums[i] <= 30

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

/* SOLUTION */
var productExceptSelf = function(nums) {
	int[] products = new int[nums.Length];

	for (int i = 0; i < nums.Length; i++) {
	  if (i == 0) {
		products[i] = 1;
	  } else {
		products[i] = products[i - 1] * nums[i - 1];
	  }
	}
	int temp = 1;
	for (int i = nums.Length - 1; i >= 0; i--) {
	  if (i == nums.Length - 1) {
		temp = 1;
	  } else {
		temp *= nums[i + 1];
	  }
	  products[i] *= temp;
	}
	return products;
  }

/* EXPLANATION*/
/*
	nums  = [ 1, 2, 3, 4]
	loop1 = [ 1, 1, 2, 6]
From the left, start at 1, multiply the 2 numbers to the left of nums[i]. 

	temp  = [24,12, 4, 1]
From the right, start at 1, multiply the number to the right of temp[i] and multply by nums[i]. 

	loop2 = [24,12, 8, 6]
Multiply loop1[i] * temp[i]. 
*/