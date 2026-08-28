// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

 

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.
 

// Constraints:

// 1 <= millis <= 1000

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// Time Complexity: O(1)
// Space Complexity: O(1)

// Example Usage:
let t1 = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t1); // should be 100, approximately 
});

let t2 = Date.now();
sleep(200).then(() => {
  console.log(Date.now() - t2); // should be 200, approximately
});
