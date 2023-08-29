// befittingBrackets

const befittingBrackets = (s) => {
    // create stack 
    const stack = [];
    
    // create obj for store the key-value pairs of brackets
    const obj = {
      "(":")",
      "{":"}",
      "[":"]",
    }
    
    // for of each char in the string
    for (let char of s){
      // check if char is a left bracket by checking if char is a key in the obj, if so, push its value to stack
      if (char in obj){
        stack.push(obj[char])
      } else {
        // if char is right bracket and equals to the last element in the stack, then pop that char off
        // else return false because we're too early with a right bracket or there's no left bracket 
        if (stack.length > 0 && stack[stack.length -1] === char){
          stack.pop();
        } else {
          return false;
        }
      }
    }
    
    // return stack with length of 0 as true;
    return stack.length === 0;
  };