// Suppose we have a string of open and close-parentheses
// e.g. (()()()(()))
// not balanced : ')'  or '())' or '(('

//Write a function that determines if a string of open/close parentheses characters is balanced

// input: string (only two characters '(' & ')' )
// can be empty
// output: true/false

// examples:
// ("") => true
// ("()()()") => true
// ("(()") => false

// Approach: use STACK

class Stack {
    constructor(stack){
        this.stack = stack;
    }

    pop() {
        return this.stack.pop();
    }

    push(val) {
        return this.stack.push(val);
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
    
    isEmpty() {
        return this.stack.length === 0;
    }
}

const isBalancedParenthesis = (str) => {
    if (str === "") return true;
    let stack = new Stack([]);
    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            stack.push(str[i]);
        } else if (str[i] === ')'){
            stack.pop(str[i]);
        }
    }
    if(stack.isEmpty()){
        return true;
    } else {
        return false;
    }
}

// console.log(isBalancedParenthesis(""))
// console.log(isBalancedParenthesis("()()()"))
// console.log(isBalancedParenthesis("(()"))



//
// LeetCode - 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


const map = {
    "(": ")",
    "[": "]",
    "{": "}"
}

const isValid = (s) => {
    const stack = [];

    for(let i = 0; i < s.length; i++){
        var el = s[i];

        if(map[el]){
            stack.push(map[el]);
        } else {
            if(el !== stack.pop()){
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(isValid("()")) // => true
console.log(isValid("()[]{}")) // => true
console.log(isValid("(]")) // => false
console.log(isValid("([)]")) // => false
console.log(isValid("{[]}")) // => true
