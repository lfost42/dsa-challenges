/* PROBLEM */
/*
Write a function, longestStreak, that takes in the head of a 
linked list as an argument. The function should return the length 
of the longest consecutive streak of the same value within the 
list.

test_00:

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3
test_01:

const a = new Node(3);
const b = new Node(3);
const c = new Node(3);
const d = new Node(3);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 3 -> 3 -> 3 -> 9 -> 9

longestStreak(a); // 4
test_02:

const a = new Node(9);
const b = new Node(9);
const c = new Node(1);
const d = new Node(9);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 9 -> 9 -> 1 -> 9 -> 9 -> 9

longestStreak(a); // 3
test_03:

const a = new Node(5);
const b = new Node(5);

a.next = b;

// 5 -> 5

longestStreak(a); // 2
test_04:

const a = new Node(4);

// 4

longestStreak(a); // 1
test_05:

longestStreak(null); // 0
*/

/* SOLUTION */
const longestStreak = (head) => {
	let maxStreak = 0;
	let currentStreak = 0;
	let currentNode = head;
	let prevVal = null;

	while (currentNode !== null) {
		if (currentNode.val === prevVal) {
			currentStreak++;
		} else {
			currentStreak = 1;
		}
		if (currentStreak > maxStreak) {
			maxStreak = currentStreak;
		}
		prevVal = currentNode.val;
		currentNode = currentNode.next;
	}
	return maxStreak;
};


/* EXPLANATION*/
/*
Our function takes the head of a linked list as an argument. We 
will return hte length of the longest consecutive streak of the 
same value in the list. 

We set up a few counter variables. We declare maxStreak to equal 
0 and currentStreak to equal 0. Then we declare a variable 
currentNode and assign it to head and we declare prevVal and 
assign it to null.

We begin a while loop to execute while currentNode is not null. 
We compare, if currentNode.val is equal to prevVal, we increment 
currentStreak, else set assign currentStreak to the integer value 
1. 

Then we check if currentStreak is greater than maxStreak and 
assign maxStreak to currentStreak if it is.

We assign prevVal to currentNode.val and currentNode to 
currentNode.next to shift our pointers over to the next set of 
values to compare.

When we exit our while loop, we return the value of maxStreak. 
*/
