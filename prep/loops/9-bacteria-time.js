//Define a function, bacteriaTime, that accepts two arguments:

//currentNum (number) - number of starting bacteria
//targetNum (number) - desired number of bacteria

//Assuming that the number of bacteria doubles every 20 minutes, bacteriaTime should return the
//number of minutes required for the number of bacteria to grow from currentNum to a number equal 
//to or larger than targetNum.

//You can assume that currentNum will be a positive integer. 
//If targetNum is smaller than currentNum, return the string 'targetNum must be larger than currentNum'.

function bacteriaTime(currentNum, targetNum) {
  let prod = 1;
  if (targetNum < currentNum) {
    return 'targetNum must be larger than currentNum';
  } else {
    for (let i = currentNum*2; i < targetNum; i = i*2) {
      prod++;
    }
  }
  return prod*20;
}

//This formula requires the number of times currentNum can double until reaching targetNum.
//It begins to double after the first 20 minutes so we start the loop at currentNum*2 
//to avoid considering currentNum as the first 20 minutes. The iterations are then
//multiplied by 20. 