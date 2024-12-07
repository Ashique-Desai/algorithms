# https://leetcode.com/problems/trapping-rain-water/solutions/5126477/video-keep-max-height-on-the-both-side/?envType=study-plan-v2&envId=top-interview-150
# Solution from leetcode

from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        left_max = height[left]
        right_max = height[right]
        water = 0
    
        while left < right:
            if left_max < right_max:
                left += 1
                left_max = max(left_max, height[left])               
                water += left_max - height[left]
            else:
                right -= 1               
                right_max = max(right_max, height[right])
                water += right_max - height[right]
        
        return water