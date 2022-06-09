/* PROBLEM */
/*
Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

reverseList(a); // f -> e -> d -> c -> b -> a
test_01:

const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

reverseList(x); // y -> x
test_02:

const p = new Node("p");

// p

reverseList(p); // p
*/
/* SOLUTION */
const reverseList = (head) => {
	let current = head;
	let prev = null;
	while (current !== null) {
		const next = current.next; //intermediary variable so we don't lose the linked list properies after disconnecting current
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
}

/* EXPLANATION */
/*
We have a function that accepts an argument of head and returns a reversed list. We declare a variable current and assign it to head. A while loop iterates until current is not equal to null. 

We need placeholder variables to keep track of our list items and reassign them so that we can reverse our list. 
First we declare a constant next and assign it to current.next. Then we assign current.next to prev, prev is assigned to current, and current is assigned to next. 

 Null   ->   a   ->   b   ->   c
prev        cur       next

When current is assigned to prev, the arrow between null and a is reversed and the arrow between a and b is removed (because a is now the tail). When prev is assigned to current and current is assigned to next, a is prev, b is curr, and c is next. 

 Null   <-   a          b   ->   c
		   prev        cur       next

When current is reassigned the arrow is reversed to point to a. Then our variable shift over. 

 Null   <-   a    <-     b     <--   c
									prev       

When current is reassigned the arrow at c reorients to point to b. Then our variable shift over and c is now prev. 

In the next iteration, current is equal to null and we exit our return loop to return prev. 
*/