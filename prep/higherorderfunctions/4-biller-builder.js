/*
Write a function billerBuilder that takes the name of a US state as an argument. billerBuilder should return a new function that takes the price of an item and returns the correct final price of the item, given the following:

if NY, charge 3% for shipping and 4% for sales tax
if NJ, charge 5% for shipping and 6.625% for sales tax
*/

const billerBuilder = (state) => {
  return (price) => {
    if (state === "NY") {
      return price * 1.03 * 1.04;
    }
    return price * 1.05 * 1.06625;
  }
}

/*
We create a function called billerBuilder and pass in state as an argument. It invokes a function that takes price as an argument. If state is NY, we return the price plus NY tax. If the state is not NY, we exit the for loop and return the price plus NJ tax instead. 
*/