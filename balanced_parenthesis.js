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

console.log(isBalancedParenthesis(""))
console.log(isBalancedParenthesis("()()()"))
console.log(isBalancedParenthesis("(()"))