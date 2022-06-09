/* PROBLEM */
/*
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.

test_00:

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

isUnivalueList(a); // true
test_01:

const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

isUnivalueList(a); // false
test_02:

const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

isUnivalueList(u); // true
test_03:

const u = new Node(2);
const v = new Node(2);
const w = new Node(3);
const x = new Node(3);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 3 -> 3 -> 2

isUnivalueList(u); // false
test_04:

const z = new Node('z');

// z

isUnivalueList(z); // true
*/

/* SOLUTION */
const isUnivalueList = (head) => {
	let current = head;

	while (current !== null) {
		if (current.val !== head.val) {
			return false;
		}
		current = current.next;
	}
	return true;
}

/* EXPLANATION*/
/*
Our function takes in the head of a linked list as an argument. It returns a boolean to indiate whether the linked list includes only one unique value. 

We declare a variable current and assign it to head. We begin a while loop to execute while current is not null. We compare current.val to head.val and if they are not equal we return false. Outside of our while loop we assign current to current.next. If we exit the for loop successfully, we return true because we did not find more than one value in our linked list. 
*/