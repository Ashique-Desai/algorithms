# https://leetcode.com/problems/sort-colors/description/

class Solution:
    def dutch_flag_sort_color(self, nums) -> None:
        n = len(nums)
        low, mid, high = 0, 0, n - 1
        print(f'nums before: {nums}')

        while mid <= high:
            if nums[mid] == 0:
                print("low", low, "mid", mid)
                nums[low] = nums[mid]
                low += 1
                mid += 1
            elif nums[mid] == 1:
                mid += 1
            else:  # nums[mid] == 2
                print("nums[mid] == 2", "low", low, "mid", mid, 'high', high)
                nums[high], nums[mid] = nums[mid], nums[high]
                high -= 1
            print(f'nums during: {nums}')

        print(f'nums after: {nums}')

nums = [2, 0, 2, 1, 1, 0] # Output: [0,0,1,1,2,2]
solution = Solution()
