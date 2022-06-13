/* PROBLEM */
/*
Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and 
return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 10^5
-104 <= nums[i] <= 10^4
*/

/* SOLUTION */
var maxSubArray = function (nums) {
	let current = nums[0];
	let max = nums[0];

	if (nums.length == 0) return 0;

	for (let i = 1; i < nums.length; i++) {
		current = Math.max(nums[i], current + nums[i]);
		max = Math.max(current, max);
	}
	return max;
};

/* EXPLANATION*/
/*
Our function takes in an array nums as an argument. It determines 
the subarray that has the leargest sum and returns the sum. 

We declare a variable current and set it equal to the first item 
in the nums array. We declare a variable max and set it equal to 
the first item in the nums array. If the array is empty, we 
return 0. 

We loop through each element in numbers starting at index 1 
(because index 0 is the first current value). We set current and 
assign it the evaluated result of invoking the Math.max method to 
either element or current plus the element. Then we assign max 
the evaluated result of invoking the Math.nax method to return 
the max of either the value of current or the value of max. 
Outside the loop, we return max. 
*/
