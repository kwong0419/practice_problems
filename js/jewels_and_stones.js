// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i < stones.length; i++){
        if(jewels.includes(stones[i])){
            count++;
        }
    }
    return count
};

// Time Complexity: O(j*s) where j is the length of jewels and s is the length of stones
// Space Complexity: O(1)

// Example Usage:
console.log(numJewelsInStones("aA", "aAAbbbb")) // 3
console.log(numJewelsInStones("z", "ZZ")) // 0
