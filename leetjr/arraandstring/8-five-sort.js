/* PROBLEM */
/*
Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

test_00

fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5] 
test_01

fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
test_02

fiveSort([5, 5, 5, 1, 1, 1, 4]);
// -> [4, 1, 1, 1, 5, 5, 5] 
test_03

fiveSort([5, 5, 6, 5, 5, 5, 5]);
// -> [6, 5, 5, 5, 5, 5, 5] 
test_04

fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 
*/

/* SOLUTION */
const fiveSort = (nums) => {
	let i = 0;
	let j = nums.length - 1;
	while (i < j) {
		if (nums[j] === 5) {
			j--;
		} else if (nums[i] === 5) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
			i++;
		} else {
			i++;
		}
	}
	return nums;
};

/* EXPLANATION */
/*
Our function has one argument: nums, which is an array of integers. We will return the array with values of 5 appearing at the end of the array. 

We will use two index pointers for this solution. The i pointer will begin at the beginning of the array to search for 5's; it will increment if the number is not a 5. The j pointer will begin at the end of the array and decrement if the number is 5. If the number is not 5, it will wait until i finds a 5 and swap the numbers. When we exit the while loop (when i becomes greater than j), we return the nums array.
*/
