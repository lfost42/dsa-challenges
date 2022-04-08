/*
Write a function, reverse, that accepts an array as an argument, and reverses the array.
The behavior should mimic the behavior of the native .reverse() array method. However, your reverse function should accept the array to operate on as an argument, rather than being invoked as a method on that array.
Do not use the native .reverse() method in your own implementation.
*/

const reverseArray = (array) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]]; // swapping
    start++;
    end--;
  }
  return array;
}
/* 
We initialize a start variable at 0 and an end variable to the last index of the 
array (our pointers). While start is less than the end, we swap the values. After 
each swap we increment start and decrement end. They eventually meet in the middle 
to complete reversing the array.
*/
