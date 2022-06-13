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
public class Solution {
    public int MaxSubArray(int[] nums) {
    	int current = nums[0];
		int max = nums[0];
		if(nums.Length == 0) return 0;
		for(int i = 1; i < nums.Length; i++){  
			current = nums[i] > current + nums[i] ? nums[i] : current + nums[i];
			max = current > max ? current: max;
			}
		return max;
    }
}

/* EXPLANATION*/
/*
Our function takes in an array nums as an argument. It determines 
the subarray that has the leargest sum and returns the sum. 

We declare a variable current and set it equal to the first item 
in the nums array. We declare a variable max and set it equal to 
the first item in the nums array. If the array is empty, we 
return 0. 

We loop through each element in numbers starting at index 1 
(because index 0 is the first current value). We use a ternary to 
assign current to the value of the greater: nums[i] or current + 
nums[i]. We use a ternary to return the great of current or max. 
When we exit the loop, we return max. 
*/
