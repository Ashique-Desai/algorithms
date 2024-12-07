# https://leetcode.com/problems/jump-game-ii/
# Note: This solution is from leetcode user

# You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
# Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:


from typing import List

def canJumpII(nums: List[int]) -> int:
    current, next, jumps = 0,0,0
    for i in range(len(nums)):
        if i > current:
            jumps += 1 # increment the number of jumps we need to take if i is more than current, i.e i is not in the range of curent
            current = next # new current
        
        next = max(next, i + nums[i]) # assign the maximum next jump to next variable and update it only if i + nums[i] is more than previous next
    
    return jumps


nums = [2,3,1,1,4]
# print(canJumpII(nums))

pythonMap = map(lambda n: n + n, nums)
print(list(pythonMap))

response = {"response":{"eligibilityresponse":"this is valid request"}}
eligibilityresponse = response["response"]["eligibilityresponse"]
print(response["response"]["eligibilityresponse"])