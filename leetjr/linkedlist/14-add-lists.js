/* PROBLEM */
/*
Write a function, addLists, that takes in the head of two linked 
lists, each representing a number. The nodes of the linked lists 
contain digits as values. The nodes in the input lists are 
reversed; this means that the least significant digit of the 
number is the head. The function should return the head of a new 
linked listed representing the sum of the input lists. The output 
list should have its digits reversed as well.

Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would 
appear as:

	1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
	5 -> 7 -> 9
test_00:

//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

addLists(a1, b1);
// 5 -> 7 -> 9
test_01:

//  7541
// +  32
// -----
//  7573

const a1 = new Node(1);
const a2 = new Node(4);
const a3 = new Node(5);
const a4 = new Node(7);
a1.next = a2;
a2.next = a3;
a3.next = a4;
// 1 -> 4 -> 5 -> 7

const b1 = new Node(2);
const b2 = new Node(3);
b1.next = b2;
// 2 -> 3 

addLists(a1, b1);
// 3 -> 7 -> 5 -> 7
test_02:

//   39
// + 47
// ----
//   86

const a1 = new Node(9);
const a2 = new Node(3);
a1.next = a2;
// 9 -> 3

const b1 = new Node(7);
const b2 = new Node(4);
b1.next = b2;
// 7 -> 4

addLists(a1, b1);
// 6 -> 8
test_03:

//   89
// + 47
// ----
//  136

const a1 = new Node(9);
const a2 = new Node(8);
a1.next = a2;
// 9 -> 8

const b1 = new Node(7);
const b2 = new Node(4);
b1.next = b2;
// 7 -> 4

addLists(a1, b1);
// 6 -> 3 -> 1
test_04:

//   999
//  +  6
//  ----
//  1005

const a1 = new Node(9);
const a2 = new Node(9);
const a3 = new Node(9);
a1.next = a2;
a2.next = a3;
// 9 -> 9 -> 9

const b1 = new Node(6);
// 6

addLists(a1, b1);
// 5 -> 0 -> 0 -> 1
*/

/* SOLUTION */
const addLists = (head1, head2) => {
	const dummyHead = new Node(null);
	let tail = dummyHead;

	let carry = 0;
	let current1 = head1;
	let current2 = head2;
	while (current1 !== null || current2 !== null || carry !== 0) {
		const val1 = current1 === null ? 0 : current1.val;
		const val2 = current2 === null ? 0 : current2.val;
		const sum = val1 + val2 + carry;
		carry = sum > 9 ? 1 : 0;

		const digit = sum % 10;
		tail.next = new Node(digit);
		tail = tail.next;

		if (current1 !== null) current1 = current1.next;
		if (current2 !== null) current2 = current2.next;
	}

	return dummyHead.next;
};

/* EXPLANATION*/
/*
Our function takes the head of two linked lists as arguments. 
Each node in the list represents a digit in reverse order (head 
is the 1's digit). Our function will return the sum of each 
linked list and return a linked list with the sum as reversed 
digits.

We set up our result linked list by declaring a const dummyHead 
and assigning it the value of a new null node. We declare a 
variable tail and assign it to dummHead so our tail is null and 
the tail of our linked list. 

Then we declare a carry variable to store the value of our carry 
digits and instantiate it to 0. We also set up our pointer 
variables current1 and assign it to head1 and current2 and assign 
it to head2. 

A while loop executes while current1 or current2 is not null or 
carry does not equal 0. We use a ternary operator to treat null 
values as 0 or assign the node value to val1 or val2. We declare 
a constant sum to add val1, val2, and carry. We assign carry to 
the value of 1 if the sum is greater than 9 or 0 if the sum was 
not greater than 9. 
	
Then we declare a constant digit and assign it the value of sum 
mod 10. Then we assign tail.next to digit. To shift our pointers 
down the linked list, we assign tail to tail.next. We check to 
see if we want to shift our current down to next and only do so 
if current is not null. 

Outside of the loop, we return dummyHead.next. 
*/
