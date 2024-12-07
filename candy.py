# https:#leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150

# There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
# You are giving candies to these children subjected to the following requirements:
# Each child must have at least one candy.
# Children with a higher rating get more candies than their neighbors.
# Return the minimum number of candies you need to have to distribute the candies to the children. 

# Example 1:

# Input: ratings = [1,0,2]
# Output: 5
# Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
# Example 2:

# Input: ratings = [1,2,2]
# Output: 4

# first give one to all
# important: A child with higher rating than both neighbor shall have more candies than its neighbors, for this we need double pass, from right to left and then left to right
# I tried to do this with a single loop in JS earlier but it failed a few tests. the below candy passes all tests

from typing import List


class Solution:
    # candy2 is experimental does not pass all tests
    def candy2(self, ratings: List[int]) -> int:
        n = len(ratings)
        candies = [1] * n
        for i in range(1,n):
            if(ratings[i] > ratings[i - 1]):
                candies[i] = candies[i - 1] + 1
                 # if rating of the neighbor on right of i is more and that neighbor's right child is more increment candies for both neighbor on right and i
                if(ratings[i] > ratings[i + 1] and ratings[i + 1] > ratings[i + 2]):
                    # increment candies for both - neighbor on right and i itself
                    candies[i + 1] = candies[i - 1] + 1
                    candies[i] = candies[i + 1] + 1
                print(f'candy2, candies: {candies}')     
            print(f'candy2, candies: {candies}') 
            return sum(candies)


    # candy passes all tests
    def candy(self, ratings: List[int]) -> int:
        n = len(ratings)
        candies = [1] * n
        print(f'before{candies}')
        
        # right to left
        for i in range(1,n):
            if(ratings[i] > ratings[i - 1]):
                candies[i] = candies[i - 1] + 1 
                print(f'after if{candies}')

        # left to right
        for j in range(n-2, -1, -1):
            if(ratings[j] > ratings[j + 1]):
                candies[j] = max(candies[j], candies[j + 1] + 1)
        return sum(candies)


ratings = [1,0,2]
solution = Solution()
print(solution.candy(ratings))

print(solution.candy2(ratings))