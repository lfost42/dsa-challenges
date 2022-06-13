/* PROBLEM */
/*
Given an integer array nums, return true if any value appears at 
least twice in the array, and return false if every element is 
distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/* SOLUTION */
var containsDuplicate = function (nums) {
	const prevNums = new Set();
	for (let element of nums) {
		if (prevNums.has(element)) {
			return true;
		} else {
			prevNums.add(element);
		}
	}
	return false;
};

/* EXPLANATION*/
/*
Our function will accept an array nums as an argument and return 
true if any value appears at least twice in teh array and false 
if not. 

We declare a constant prevNums and assign it equal to an empty 
set. We loop through each element in nums. Our conditional checks 
if prevNums has the element and returns true if it does, 
otherwise it adds the element to the set. If we exit the loop, 
we did not find duplicates and we return false. 
*/
