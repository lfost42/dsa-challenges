/* PROBLEM */
/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 
Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 10^5
*/

/* SOLUTION */
public class Solution {
    public IList<IList<int>> ThreeSum(int[] nums) {
        int targetSum = 0;
        var triplets = new List<IList<int>>();
        if (nums == null || nums.Length == 0) return triplets;
        Array.Sort(nums);

        for (int i = 0; i < nums.Length - 2; i++)
        {
            if (i != 0 && nums[i] != nums[i - 1])
            {
                int left = i + 1;
                int right = nums.Length - 1;

                while (left < right)
                {
                    int currentSum = nums[i] + nums[left] + nums[right];
                    if (currentSum == targetSum)
                    {
                        int[] newTriplet = { nums[i], nums[left], nums[right] };
                        triplets.Add(newTriplet);
                        while (nums[left] == nums[left + 1]) left++;
                        while (nums[right] == nums[right - 1]) right--;
                        left++;
                        right--;
                    }
                    else if (currentSum < targetSum)
                    {
                        left++;
                    }
                    else if (currentSum > targetSum)
                    {
                        right--;
                    }
                }
            }
        }
        return triplets;
    }
}

/* EXPLANATION*/
/*
We first sort the input nums array. We declare a constant triplets and assign it equal to an empty integer array. We loop through the elements except the last (the last element will be our right pointer).

We begin a for loop to iterate while left is less than right. We begin a conditional that checks each element is not equal to the previous element. We declare the left pointer and set it equal to i + 1. We declare the right pointer and set it equal to the last index in the array. 

We declare a constant currentSum to equal the sum of nums[i], nums[left], and nums[right]. Every time currentSum is equal to 0 (our target), we push the current elements into the triplets array. While nums[left] is equal to nums[left + 1], we increment left. While nums[right] is equal to nums[right - 1] we decrement right. We increment left and decrement right. If currentSum is less than 0, we increment left. If currentSum is greater than 0, we decrement right. 
*/