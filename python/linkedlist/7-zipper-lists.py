/* PROBLEM */
/*
Write a function, zipperLists, that takes in the head of two 
linked lists as arguments. The function should zipper the two 
lists together into single linked list by alternating nodes. If 
one of the linked lists is longer than the other, the resulting 
list should terminate with the remaining nodes. The function 
should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.

test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z
test_01:

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

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f
test_02:

const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4
test_03:

const w = new Node("w");

// w

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

zipperLists(w, one);
// w -> 1 -> 2 -> 3
test_04:

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

const w = new Node("w");
// w

zipperLists(one, w);
// 1 -> w -> 2 -> 3
*/

/* SOLUTION */
const zipperLists = (head1, head2) => {
	const head = head1;
	let tail = head;
	let current1 = head1.next;
	let current2 = head2;
	let count = 0;

	while (current1 !== null && current2 !== null) {
		if (count % 2 === 0) {
			tail.next = current2;
			current2 = current2.next;
		} else {
			tail.next = current1;
			current1 = current1.next;
		}
		tail = tail.next;
		count += 1;
	}

	if (current1 !== null) tail.next = current1;
	if (current2 !== null) tail.next = current2;

	return head;
};

/* EXPLANATION*/
/*
Our function will take the head of two linked lists as arguments 
and mutate the original nodes so that the linked lists join 
together while alternating nodes. If a linked list is longer 
than the other, it will be appended as the remaining nodes.  

We begin by declaring a variable head and assign it to head1. 
Then we declare a variable current1 and assign it to head1.next. 
We declare a variable current2 and assign it head2. 

We first set head to tail which will be the start of our linked
list and move nodes to the end to continue the pattern. We use 
a counter variable to alternate between each linked list to append 
it to our tail. If count is even, it takes the node from 
list2 and if count is odd, it will take the node from the list1. 

At each loop, count increments and tail is assigned to tail.next. 

If either current1 or current2 returns null, we exit the loop 
and assign the remaining current1 or current2 as tail.next which 
will append the remaining nodes to the end of our list. We return 
the head of our linked list. 
*/
