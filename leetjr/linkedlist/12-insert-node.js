/* PROBLEM */
/*
Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.

test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d
test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'v', 3);
// a -> b -> c -> v -> d
test_02:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'm', 4);
// a -> b -> c -> d -> m
test_03:

const a = new Node("a");
const b = new Node("b");

a.next = b;

// a -> b

insertNode(a, 'z', 0);
// z -> a -> b 
*/

/* SOLUTION */
const insertNode = (head, value, index) => {
	if (index === 0) {
		const newHead = new Node(value);
		newHead.next = head;
		return newHead;
	}

	let count = 0;
	let current = head;
	while (current !== null) {
		if (count === index - 1) {
			const next = current.next;
			current.next = new Node(value);
			current.next.next = next;
		}
		count++;
		current = current.next;
	}
	return head;
};

/* EXPLANATION*/
/*
Our function will take in three parameters as arguments: head, value, and index. Our function will add a node(value) at the index provided. We will then return the head of the new linked list. 

Generally, we are adding the node at index - 1. However, if index were 0, we would be out of bounds. So we'll start by checking if index is 0 and if it is, we'll declare a constant newHead and assign it to a new Node with the value given. Then we point newHead.next to head and return newHead.

We declare a count variable and assign it to 0. We ceclare a current variable and assign it to head. We begin a while loop to execute while current is not null. 

We declare a temp variable and assign it current.next. This allows us to assign current.next to the new node value (inserts the new node). We complete the link by assigning current.next.next to temp.

Outside of the loop, we increment count and traverse the linked list by assigning current to current.next

Finally, we return head. 
*/