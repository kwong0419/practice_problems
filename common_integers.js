// Given two integer arrays, we want to output
// a list of integers which appear in both arrays
// both arrays can be variable length (N is length of first, M is length of second)

// empty arrays are possible
// [2,3] [3,4] => [3]

// My solution
// input: two arrays, n & m
// output: one array, list of all integers that appear in both n & m

// n & m can be empty
// or variable length

// case1: ([],[3, 4, 5]) => []
// case2: ([1, 2, 3], [2, 4, 100]) => [2]
// case3: ([1, 2, 3, 5], [2, 3, 5, 10]) => [2, 3, 5]

const commonInts = (n, m) => {
  let numMap = {};
  let result = [];
  for(let i = 0; i < n.length; i++){
    numMap[n[i]] = n[i]; //O(N)
  }
  for(let j = 0; j < m.length; j++){
    if(numMap.hasOwnProperty(m[j])){
      result.push(m[j]);
    }
  }
  return result;
}

console.log(commonInts([],[3, 4, 5]))
console.log(commonInts([1, 2, 3], [2, 4, 100]))
console.log(commonInts([1, 2, 3, 5], [2, 3, 5, 10]))
