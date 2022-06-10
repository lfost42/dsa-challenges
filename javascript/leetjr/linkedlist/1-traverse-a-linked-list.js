/* A linked list */
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')

a.next = b;
b.next = c;
c.next = d;

/* Traversing a linked list (classic)*/
// const printLinkedList = (head) {
// 	let current = head;
// 	while(current !== null) {
// 		console.log(current.val);
// 		current = current.next;
// 	}
// }

// printLinkedList(a);

/*
Line 20: We declare a function and assign it a label 
printLinkedList which will pass head as an argument. 

Line 28: We invoke the printLinkedList function passing in a as a 
parameter. The function is pushed to the call stack and a new 
execution context opens. 
Line 21: In local memory, we declare a variable current and 
assign it equal to head. 
Line 22: We begin a while loop to execute while current is not 
null. 
Line 23: We invoke a console log function while passing in 
current.value as a parameter.
Line 24: We assign the value of current to current.next. The loop 
continues until the linked list returns null. 
	The printLinkedList function pops off the call stack and 
	the execution context is available for garbage collection. 
*/

/* Traversing a linked list (recursion) */
const printLinkedList = (head) => {
	if (head === null) return;
	console.log(head.val);
	printLinkedList(head.next);
}

printLinkedList(a);

/* 
Line 42: We declare a function and assign it a lable 
printLinkedList and store it in global memory.
Lin 48: We invoke the function definition of printLinkedList 
passing a as an argument. 
printLinkedList is pushed to the call stack and an execution context 
opens. In local memory, the argument a is paired with the 
parameter head. 
Line 44: We invoke the function definition printLinkedList 
passing in head.next as a parameter. This recursively calls the 
function and prints the node until the value of head is null and 
we exit the recursive call. 
printLinkedList is popped off the call stack and the execution 
context is available for garbage collection. 
*/
