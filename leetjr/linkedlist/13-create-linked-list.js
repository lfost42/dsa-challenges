/* PROBLEM */
/*
Write a function, createLinkedList, that takes in an array of 
values as an argument. The function should create a linked list 
containing each element of the array as the values of the nodes. 
The function should return the head of the linked list.

test_00:

createLinkedList(["h", "e", "y"]);
// h -> e -> y
test_01:

createLinkedList([1, 7, 1, 8]);
// 1 -> 7 -> 1 -> 8
test_02:

createLinkedList(["a"]);
// a
test_03:

createLinkedList([]);
// null
*/

/* SOLUTION */
const createLinkedList = (values) => {
	const dummyHead = new Node(null);
	let tail = dummyHead;
	for (let element of values) {
		tail.next = new Node(element);
		tail = tail.next;
	}
	return dummyHead.next;
};

/* EXPLANATION*/
/*
Our function takes an array as an argument and creates a linked 
list containing each element of the array. The function returns 
the head of the linked list. 

We first declare a constant dummyHead and assign it to a new null 
node. We declare a variable tail and assign it to dummy head. 
This begins our linked list. Then we iterate through the array 
for each element of values. We assign tail.next to a new node 
containing the value of the element of the array and we assign 
tail to tail.next (to shift the linked list to the new tail at 
every loop.)

We return dummyHead.next (dummyHead is null). 
*/
