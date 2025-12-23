// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]


// Constraints:

// 1 <= numRows <= 30

function generate(numRows) {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        // Create new row, starting with 1
        const row = [1];

        // Build middle elements from previous row
        if (i > 0) {
            for (let j = 1; j < i; j++) {
                row[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
            // End with 1
            row.push(1);
        }

        result.push(row);
    }

    return result;
}

// Time Complexity: O(n^2) - where n is the number of rows
// Space Complexity: O(1) - excluding output array (O(numRows^2) including output)

// Example Usage:
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
