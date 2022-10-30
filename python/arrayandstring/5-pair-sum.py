/* PROBLEM */
/*
Write a function, pairSum, that takes in an array and a target sum as arguments. 
The function should return an array containing a pair of indices whose elements 
sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.

test_00:

pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
test_01:

pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
test_02:

pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
test_03:

pairSum([1, 6, 7, 2], 13); // -> [1, 2]
test_04:

pairSum([9, 9], 18); // -> [0, 1]
test_05:

pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]
*/

/* SOLUTION */
const pairSum = (numbers, targetSum) => {
	const previousNums = {};

	for (let i = 0; i < numbers.length; i++) {
		const num = numbers[i];
		const complement = targetSum - num;

		if (complement in previousNums) {
			return [i, previousNums[complement]]
		}
		previousNums[num] = i;
	}
}

/* EXPLANATION */
/*
We begin with two inputs, an array of numbers and an integer: targetSum. We 
need to return an array of numbers containing the elements that sum to the 
value of targetSum. 

We declare a variable previousNums and instantiate it to an empty object. We 
iterate through the array and subtract the targetNum from each element (num) 
and set it equal to the constant: complement. 

If we find the complement in previousNums, we return an array containing i and 
previousNums[complement]

If we don't find the complement in previousNums, we add i to previousNums. 
*/
