/* PROBLEM */
/*Given an array of integers nums and an integer target, return 
an array of the two integers in the array that add up to target.
If there are no integers that add up to the target sum, return
an empty array. 
*/

const twoSum = (array, sum) => {
	const nums = new Set();
	for (let element of array) {
		const complement = sum - element;
      if (nums.has(complement)) {
        return [complement, element];
      } else {
        nums.add(element);
      }
	}
  return [];
}

/* EXPLANATION */
/*
Our function takes in an array and sum as arguments. We will
return an array that includes the elements that add up to 
the sum argument. 

We declare a constant nums and assign it the value of a new
Set. WE loop through each element of array. We find the
array's complement by subtracting the sum from the element.
If the complement is in nums, we return the complement and
element. Else, we add the element to our nums set. If
we do not find a sum, we eit the loop and return an empty
array. 
*/
