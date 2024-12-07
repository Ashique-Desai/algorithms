#You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
#Return true if you can reach the last index, or false otherwise.
#Example 1:

#Input: nums = [2,3,1,1,4]
#Output: true
#Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
#&& nextElement < nums.length - 1

from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        gas = 0
        for n in nums: # we calculate the capacity to jump as gas
            print('gas', gas, 'n', n)
            if gas < 0: # if gas is -1 or less we know we cannot jump to the next station
                return False
            elif n > gas:
                gas = n  # this is smart, we only change the value of gas if its more than previous, ex: 3 at index 0 will not be changed till index 4 as that takes us the farthest, 
                # 2 at index 1 will also take to the same place so we ignore it, unless it takes us farther - in which case we assign that value to gas
                        
            gas -= 1 # for each jump we subtract 1 for the jump taken 

        return True
    
solution = Solution()
result = solution.canJump([3,2,1,0,4])
print(result)

    