/*
Write a function, getNodeValue, that takes in the head of a 
linked list and an index. The function should return the value of 
the linked list at the specified index.

If there is no node at the given index, then return null.

test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'
test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 3); // 'd'
test_02:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 7); // null
test_03:

const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

getNodeValue(node1, 0); // 'banana'
test_04:

const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

getNodeValue(node1, 1); // 'mango'
*/

/* SOLUTION */
const getNodeValue = (head, index) => {
	let count = 0;
	let current = head;
	while (current !== head) {
		if (count === index) return current.val;
		current = current.next;
		count++;
	}
	return null
};

/* EXPLANATION */
/*
We have a function getNodeValue that will take two arguments, 
head and index where head is the value of the head of our linked 
list and index is an integer. The function will return the value 
of the linked list at the value of our index argument. We will 
return null if the index does not exist in our linked list.

We declare a variable count and assign it equal to 0. We declare 
a variable current and assign it to head.

We begin a while loop to execute while current is not null. If 
count equals index, we return current.val. If not, we set current 
to equal current.next and iterate count. If current becomes null,
we exit the while loop and return null. 
*/
