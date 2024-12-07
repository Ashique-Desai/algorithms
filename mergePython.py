from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        slice = nums1[:m]
        nums1 = sorted(slice + nums2)
        print("nums1 merged!", nums1)

nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3

# expected Output: [1,2,2,3,5,6] for input nums1 = [1, 2, 3, 0, 0, 0] m = 3 nums2 = [2, 5, 6] n = 3

# Create an instance of Solution
solution = Solution()
solution.merge(nums1, m, nums2, n)