/*
According to the song, Katy Perry "maxed our credit cards".
Define a function, lastFridayNight, takes an array of 
transactions.

lastFridayNight should return the total amount she spent last 
Friday night.

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];
lastFridayNight(transactions) // => 10512
*/

const lastFridayNight = (transactions) => {
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    total += transactions[i].amount;
  }
  return total;
}

/*
We initiate a variable called total and set it to equal 0. A for 
loop iterates through each object and adds the value of 
transactions[i] to the value of total. 
*/
