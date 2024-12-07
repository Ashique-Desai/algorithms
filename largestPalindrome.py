# the soltion works but fails a few tests in leetcode, to fix this later
class Solution:
    def isPalindrome(self, string: str) -> bool:
        reversed_string = string[::-1]
        print(f'string == reversed_string {string == reversed_string}')
        return string == reversed_string

    def largestPalindrome(self, string: str) -> str:
        largest_palindrome = ''
        n = len(string)
        for i in range(n):
            sub = string[i:]
            for j in range(n, -1, -1):  # Correct the range function usage
                sub_sub_string = sub[:j]
                if self.isPalindrome(sub_sub_string) and len(sub_sub_string) > len(largest_palindrome):
                    largest_palindrome = sub_sub_string
                    print(f'sub_sub_string: {sub_sub_string}')
        return largest_palindrome

# Example usage
finder = Solution()
string = "abcdbbfcba" # "abracadabra"
result = finder.largestPalindrome(string)
print(result)  # This should print the largest palindrome found






