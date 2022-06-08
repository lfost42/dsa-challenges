/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
test_01:

const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]
test_02:

const q = new Node("q");

// q

linkedListValues(q); // -> [ 'q' ]
test_03:

linkedListValues(null); // -> [ ]
*/

/* SOLUTION ITERATIVE */
const linkedListValuesIterative = (head) => {
	const values = [];
	let current = head;
	while (current !== null) {
		values.push(current.val);
		current = current.next;
	}
	return values;
};

/*
Our function will take an argument head which will be the value of the head of a linked list. We will return an array containing all values of nodes in the linked list. 

We begin by declaring a variable values and assign it to the value of an empty array. We declare a variable current and assign it the value of head. 

We iterate through each value of head while current is not null. We take the current.val and push it into the values array. We assign the value of current to current.next (the next node). When current.next returns null, we exit the loop and return the values array. 
*/