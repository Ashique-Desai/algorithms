from typing import List


class Solution:  
    def jump2(self, nums: List[int]) -> int:
      next, curr, ans = 0,0,0
      for i in range(len(nums)):
         if i > curr:
            print(f'curr before: {curr}')
            ans+=1
            curr = next
            print(f'curr: {curr}, ans: {ans}')
         next = max(next, i + nums[i])

      return ans
      
 
 
nums2 = [2, 3, 1, 1, 4] 
solution = Solution()
result = solution.jump2(nums2)
print(result)

# Traceback (most recent call last):
#   File "/home/ashique/Misc/coding-challenges/algorithms/jump2Python.py", line 14, in <module>
#     result = solution.jump2(nums2)
#   File "/home/ashique/Misc/coding-challenges/algorithms/jump2Python.py", line 6, in jump2
#     next, curr = 0,0,0
# ValueError: too many values to unpack (expected 2)


