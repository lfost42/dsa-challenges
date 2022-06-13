/* PROBLEM */
/*
You are given an array prices where prices[i] is the price of a 
given stock on the ith day.

You want to maximize your profit by choosing a single day to buy 
one stock and choosing a different day in the future to sell that 
stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 
(price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed 
because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max 
profit = 0.
 

Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
*/

/* SOLUTION */
public class Solution {
    public int MaxProfit(int[] prices) {
    int profit = 0;
	int min = prices[0];
	foreach (int price in prices) {
		if (min > price) min = price;
		int check = price - min;
		if (check > profit) profit = check;
	}
	return profit;
    }
}

/* EXPLANATION*/
/*
Our function takes in an array prices that provides the price of 
a given stock on the ith day. We will return the maximum profit 
we can receive with one buy and one sell. If there is no profit 
to be made, we return 0.

We declare a variable profit and assign it to equal 0. We declare 
a variable min and assign it to the first value in the prices 
array. We loop through each price in prices and reassign min 
every time it's bigger than the price. This finds the lowest 
price in the array.

We declare a variable check and assign it equal to price minus 
min. If the check is greater than profit, we assign profit to 
check. Outside of the loop we return profit. 
*/
