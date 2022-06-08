/* PROBLEM */
/*
Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.

test_00:

intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
test_01:

intersection([2,4,6], [4,2]) // -> [2,4]
test_02:

intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
test_03:

intersection([0,1,2], [10,11]) // -> []
test_04:

const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
intersection(a, b) // -> [0,1,2,3,..., 49999]
*/

/* SOLUTION */
const intersection = (a, b) => {
	//brute force O(N^2)
	/*
	for(let item of a) {
		if(b.includes(item)) { //includes method runs at O(N)
			results.push(item)
		}
	}
	*/
	const result = [];
	const items = new Set();
	for (let item of a) {
		items.add(item);
	} //0(N)

	for (let element of b) {
		if (items.has(element)) { // this lookup is O(1)
			result.push(element);
		} //O(M)
	}
	return result;
}; //O(N)

/* EXPLANATION */
/*
We declare a variable result and instantiate it to the value of an empty array. We declare another variable items and instantiate it to the value of a set. In a for loop we add each item of a into the set.

The second loop iterates through each element of b. Then we check if the item *has* the element (which is O(1) run time) and push the element into the result array. 
*/
