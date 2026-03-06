# Given an array of intervals where intervals[i] = [start^i, end^i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



# Example 1:

# Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
# Output: [[1,6],[8,10],[15,18]]
# Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

# Example 2:

# Input: intervals = [[1,4],[4,5]]
# Output: [[1,5]]
# Explanation: Intervals [1,4] and [4,5] are considered overlapping.

# Example 3:

# Input: intervals = [[4,7],[1,4]]
# Output: [[1,7]]
# Explanation: Intervals [1,4] and [4,7] are considered overlapping.


# Constraints:

# 1 <= intervals.length <= 10^4
# intervals[i].length == 2
# 0 <= start^i <= end^i <= 10^4

def merge(intervals: list[list[int]]) -> list[list[int]]:
    if not intervals:
        return []

    intervals.sort(key=lambda x: x[0])

    merged = [intervals[0]]

    for i in range(1, len(intervals)):
        current_interval = intervals[i]
        last_merged_interval = merged[-1]

        if current_interval[0] <= last_merged_interval[1]:
            last_merged_interval[1] = max(last_merged_interval[1], current_interval[1])
        else:
            merged.append(current_interval)

    return merged

# Time Complexity: O(n log n)
# Space Complexity: O(n)

# Example Usage:
print(merge([[1,3],[2,6],[8,10],[15,18]])) # [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]])) # [[1,5]]
print(merge([[4,7],[1,4]])) # [[1,7]]
