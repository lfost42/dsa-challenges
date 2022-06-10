/* PROBLEM */
/*
Write a function, mergeLists, that takes in the head of two 
sorted linked lists as arguments. The function should merge the 
two lists together into single sorted linked list. The function 
should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain 
increasing sorted numbers.

test_00:

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

mergeLists(a, q);
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 
test_01:

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(1);
const r = new Node(8);
const s = new Node(9);
const t = new Node(10);
q.next = r;
r.next = s;
s.next = t;
// 1 -> 8 -> 9 -> 10

mergeLists(a, q);
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28 
test_02:

const h = new Node(30);
// 30

const p = new Node(15);
const q = new Node(67);
p.next = q;
// 15 -> 67

mergeLists(h, p);
// 15 -> 30 -> 67
*/

/* SOLUTION */
const mergeLists = (head1, head2) => {
	let dummyHead = new Node(null);
	let tail = dummyHead;
	let current1 = head1;
	let current2 = head2;

	while (current1 !== null && current2 !== null) {
		if (current1.val < current2.val) {
			tail.next = current1;
			current1 = current1.next;
		} else {
			tail.next = current2;
			current2 = current2.next
		}
		tail = tail.next;
	}
	if (current1 !== null) tail.next = current1;
	if (current2 !== null) tail.next = current2;

	return dummyHead.next;
}

/* EXPLANATION*/
/*
Our function takes the head of 2 sorted linked lists as arguments. 
We will merge the lists into a single sorted linked list. We will 
return the head of the sorted linked list.

For this we'll create a node to begin our sorted linked list. We 
declare a variable dummyHead and assign it the value of a new Node 
that is null. We assign tail to dummyHead which is the start of 
our linked list. Then we declare two pointer variables current1 
which is assigned to head1 and crrent2 which is assigned to 
head2. 

We begin a while loop to execute while current1 and current 2 are 
not null. We compare the values of current1 and current2 and 
tail.next to that pointer (appends the node to our tail). Then we 
assign that current to current.next. Outside of the comparison, 
tail is assigned to tail.next (shifts to the end of our linked 
list). 

When current1 or current2 is null, we assign tail.next to 
current1 or current2, whichever is not null at the time. This 
appends the remaining nodes to our list. Finally, we return 
dummyHead.next (because dummyHead is null). 
*/
