# Given an m x n grid of characters board and a string word, return true if word exists in the grid.

# The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

# Example 1:


# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
# Output: true
# Example 2:


# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
# Output: true
# Example 3:


# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
# Output: false
 

# Constraints:

# m == board.length
# n = board[i].length
# 1 <= m, n <= 6
# 1 <= word.length <= 15
# board and word consists of only lowercase and uppercase English letters.
 

# Follow up: Could you use search pruning to make your solution faster with a larger board?

def exist(board, word):
    m = len(board)
    n = len(board[0])

    def dfs(row, col, index):
        if index == len(word):
            return True

        if row < 0 or row >= m or col < 0 or col >= n or board[row][col] != word[index]:
            return False

        temp = board[row][col]
        board[row][col] = "#"

        result = dfs(row + 1, col, index + 1) or \
                 dfs(row - 1, col, index + 1) or \
                 dfs(row, col + 1, index + 1) or \
                 dfs(row, col - 1, index + 1)
        
        board[row][col] = temp
        return result

    for r in range(m):
        for c in range(n):
            if board[r][c] == word[0] and dfs(r, c, 0):
                return True
    
    return False

# Time Complexity: O(m * n * 4^k) where k is the length of the word
# Space Complexity: O(k)

# Example Usage:
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")) # True
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")) # True
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")) # False