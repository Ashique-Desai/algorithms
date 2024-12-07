
# solving an algorithm problem with Nischay - 28 Aug 2024
from typing import List


def removeDuplicates(nums: List[int]) -> int:
        for n in nums:
            indexOfElement = nums.index(n)
            print("n:",n, "indexOfElement:", indexOfElement)
            
nums = [1,1,2] 
result = removeDuplicates(nums)
print(result)