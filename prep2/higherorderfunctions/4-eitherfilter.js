/*
Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.
*/

const eitherFilter = (array, callback1, callback2) => {
    return array.filter(value => callback1(value) || callback2(value));
}

/*
We have a function that accepts 3 arguments for array and 2 callback functions. We invoke the filter method on the array variable. We use a lambda expression to pass in a parameter to each callback function and return wether either function returns true. 
*/