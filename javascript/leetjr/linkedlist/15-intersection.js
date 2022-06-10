/* PROBLEM */
/*
Write a function that returns the intersection of two linked 
lists. You may assume that an intersection exists. 
*/

/* SOLUTION */
const intersectPoint = (head1, head2) => {
    let currentNode1 = head1;
    let currentNode2 = head2;

    while (currentNode1 !== currentNode2) {
        currentNode1 = currentNode2.next;
        currentNode2 = currentNode2.next;
        if (currentNode1 === currentNode2) {
            return currentNode1;
        }
        if (currentNode1 === null) {
            currentNode1 = head2;
        }
        if (currentNode2 === null) {
            currentNode2 = head1;
        }
    }
    return currentNode1;
}

/* EXPLANATION*/
/*
Our function takes in the head of two linked lists as arguments 
and returns the intersection of the two linked lists. 

We begin by declaring two pointer variables. We assign 
currentNode1 to head1 and currentNode2 to head2. 

We begin a while loop to execute while currentNode1 is not 
equal to currentNode2. If they are equal to each other, we 
found the point of intersection and we will return currentNode1. 

If we reach the end of the first linked list (equals null), we 
assign currentNode1 to head2. If we reach the end of the second 
linked list (equals null), we assign currentNode2 to head1. 
*/
