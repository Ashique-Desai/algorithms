
# https://leetcode.com/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150

# canJump II problem, return least steps required to reach or cross the last element

# Below is my own solution, passes 58/109 test cases

from typing import List


class Solution:
    def jump(self, nums: List[int]) -> int:       
        gas = 0
        counter = 0
        last = len(nums) - 1
        print('last', last)
        for n in range(len(nums) - 1):
            if len(nums) < 2:
                return 0
            if nums[0] >= len(nums) - 1:
                print('nums[0] >= len(nums) true')
                return 1
            if nums[n] + n >= len(nums) - 1:
                # if nums[n] > nums[last]:
                #     print('if nums[n] > nums[last]')
                #     return n + 1
                print('nums[n] >= len(nums) true', 'n', n)
                return counter + 1 if n != last else counter                
            if nums[n] > gas:
                print(f'before: nums[n] {nums[n]} gas {gas}, counter {counter}')
                gas = nums[n]
                counter += 1
                print(f'after: nums[n] {nums[n]} gas {gas}, counter {counter}')
                
            gas -= 1

        return counter