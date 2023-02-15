// BINARY TREE WARMUP
// create baseline binary tree:
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


        //     a
        //    / \
        //   b   c
        //  /\    \
        // d  e    f

// depth first values
// Write a function, depthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in depth-first order.

// source: https://excalidraw.com/#json=ol6TlxgIywh0n5gfIetdl,yQLKNxqaOXLQcLkzwPU5TQ

const depthFirstValues = (root)=>{
    // edge case: if root is null return empty array
    if(root === null) return [];

    // create empty array for result
    let result = []

    // create stack with an array and initialize with root.
    const stack = [root]

    // let's use array.push to add to stack and array.pop to remove from stack

    // while loop
    while(stack.length > 0){
        // start the iteration by popping the element from the stack
        const current = stack.pop();
        console.log("current.val-->", current.val)
        result.push(current.val)
      
        // if the right/left node exists, add the nodes children
        // right children enter stack first and then left children
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }

    console.log("result-->", result)
    return result;
};

// depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

// breadth first values
// Write a function, breadthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in breadth-first order.

// source: https://excalidraw.com/#json=kuSGUeQiHJXONiGTV18lI,odF8eHBY3Rdsorx8N_pIxg
// breadth means the width of something
const breadthFirstValues = (root) => {
    // edge case
    if(root === null) return []
    
    // create values variable
    let values = [];
    
    // create queue
    let queue = [root]
    
    // create while loop
    while(queue.length > 0){
      // remove front of the queue
      // index 0 is your front of the array; and index - length is the end of your array
      // The shift() method removes the first element from an array and returns that removed element. 
      // This method changes the length of the array.
      let current = queue.shift()
  
      // push current.val to values array
      values.push(current.val)
      
      // push left nodes to queue then right nodes
      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }
    // return values
    return values;
  };

// tree sum
// Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
// The function should return the total sum of all values in the tree.

// source: https://excalidraw.com/#json=few1CjpzXWtPGr0zPfGsR,BG3aLRY_Kk3sHQxZW4-wnA

// iterative method
// solve using depth First 
const treeSum = (root) => {
    // edge case
    if(root === null) return 0
  
    let stack = [root]
    let count = 0
  
    // while loop
    while(stack.length > 0){
      // pop first element from stack and make that the current
      let current = stack.pop();
      
      // add current.val to count
      count = count + current.val;
      
      // if right node exists, push to stack
      if(current.right) stack.push(current.right);
      
      // if left node exists, push to stack
      if(current.left) stack.push(current.left);
    }
    
    // return count
    return count
  };

//recursive method
const treeSum = (root) => {
    if(root === null) return 0;
    
    return root.val + treeSum(root.left) + treeSum(root.right)
  }


// tree includes
// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
// The function should return a boolean indicating whether or not the value is contained in the tree.
// source: https://excalidraw.com/#json=3Nr3IOAgXJ6IqOW0VP5A2,a-F4MsNs3eVzENQnM3oB8A

// breadth search
const treeIncludes = (root, target) => {
    // if root is null return false
    if(root === null) return false;
    
    // create queue variable
    let queue = [root];
    
    // // create result
    // let result = 
        
    // while loop
    while(queue.length > 0){
      let current = queue.shift()
      
      if(current.val === target) return true;
      
      // if current.left exists, push current.left to queue
      if(current.left) queue.push(current.left)
      // if current.left exists, push current.left to queue
      if(current.right) queue.push(current.right)
    }
    
    return false
    
  };

// tree min value
// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
// The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.
//depth uses .pop on stack
const treeMinValue = (root) => {
    // todo
    let minValue = +Infinity;
    let stack = [root]
    
    while (stack.length > 0){
      let current = stack.pop();
      if(current.val < minValue) minValue = current.val
      
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left)
      
    }
    
    return minValue;
  };

// lexical order
// Write a function, lexicalOrder, that takes in 2 words and an alphabet string as an argument. 
// The function should return true if the first word should appear 
// before the second word if lexically-ordered according to the given alphabet order. 
// If the second word should appear first, then return false.

// Note that the alphabet string may be any arbitrary string.
// Intuitively, Lexical Order is like "dictionary" order:
// You can assume that all characters are lowercase a-z.
// You can assume that the alphabet contains all 26 letters.

const lexicalOrder = (word1, word2, alphabet) => {
    // find the maxLength of the word;
    let maxLength = Math.max(word1.length, word2.length);
    
    // for loop each element in word1 and word2;
    for (let i = 0; i < maxLength; i++){
      // iterate each word1 element
      let char1 = word1[i];
      // iterate each word2 element
      let char2 = word2[i];
      
      let value1 = alphabet.indexOf(char1)
      let value2 = alphabet.indexOf(char2)
      
      // check if word1 is < word2 in the alphabet, return true;
      if(value1 < value2) return true;
      // else if word1 > word2, return false  
      else if(value2 < value1) return false;
    }
    
    // return true;
    return true;
  };

// max root to leaf path sum
// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. 
// The function should return the maximum sum of any root to leaf path within the tree.

// You may assume that the input tree is non-empty.

// *** in tree problems recursive method is the best for path finding, building paths ***

// recursive method:
const maxPathSum = (root) => {
    // base case
    if(root.left === null && root.right === null) return root.val;

    if(root === null) return -Infinity;

    let maxPath = Math.max(maxPathSum(root.left) || maxPathSum(root.right));

    return root.val + maxPath;

};

// tree path finder
// Write a function, pathFinder, that takes in the root of a binary tree and a target value. 
// The function should return an array representing a path to the target value. 
// If the target value is not found in the tree, then return null.

// You may assume that the tree contains unique values.

// most path tree problems are best solve recursively.
// source: https://excalidraw.com/#json=G1AdKLNEeQMotR88TqbfH,vFz-BKEN0In9uB9p1XmYhA

// const pathFinder = (root, target) => {
//   // base case 1
//   if(root === null) return null;

//   // base case 2
//   if(root.val === target) return [root.val];

//   // make two recursive calls: left and right;
//   const leftPath = pathFinder(root.left, target);
//   const rightPath = pathFinder(root.right, target);

//   // check which path is not null
//   if(leftPath !== null) {
//     return [root.val].concat(leftPath);
//   };

//   if (rightPath !== null){
//     return [root.val].concat(rightPath);
//   }

//   return null;


// };


// root.val cannot be initialized into a variable because it is a property of the root object, not a variable in itself. The root object is passed as an argument to the pathFinder function and it is assumed that it is a valid binary tree node, which has a property val that holds the value of the node.
// If you want to initialize the root.val into a variable, you can do something like this:
const pathFinder = (root, target) => {
  // base case 1
  if(root === null) return null;

  // base case 2
  if(root.val === target) return [root.val]

  let rootVal = root.val;
  // create path variable
  let path = [rootVal]
  
  // create recursive functions for root.left and root.right
  let leftPath = pathFinder(root.left, target)

  let rightPath = pathFinder(root.right, target)

  // if left path exists, we want to concat the left path with the path array 
  if (leftPath !== null) {
      return path.concat(leftPath)
  }

  // if right path exists, concat right path with path array
  if (rightPath !== null) {
      return path.concat(rightPath)
  }

  // return null
  return null
}
// By initializing root.val into rootVal variable, you can use it multiple times in the function, and also makes the code more readable.



// tree value count
// Write a function, treeValueCount, that takes in the root of a binary tree and a target value. 
// The function should return the number of times that the target occurs in the tree.
// source: https://excalidraw.com/#json=N5MgYA7lQY71SsljJpr3N,Nc0bUNfCVL_-ajhxo_W3CQ

const treeValueCount = (root, target) => {
  // edge case
  if(root === null) return 0;
  // create count
  let count = 0;

  // create stack
  let stack = [root]

  // while loop with a stopping condition of ... stack.length > 0
  while (stack.length > 0 ){
      // create current variable to a current to equal stack.pop()
      current = stack.pop()

      // if current.val === target, increase count by 1
      if(current.val === target) count++

      // check if right children exists, if so push to stack
      if(current.right) stack.push(current.right)

      // check if left children exists, if so push to stack
      if(current.left) stack.push(current.left)

  } 

  // return count
  return count
}

// how high
// Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.

// The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

// If the tree is empty, return -1.

// source: https://excalidraw.com/#json=KWKd2v7CAgZqpcuq0Ez97,H1wtuDzrk2h6MefU2vRYnw

const howHigh = (node) => {
  // if node === null return -1
  if(node === null) return -1

  // check the height of left
  const leftHeight = howHigh(node.left)

  // check the height of right
  const rightHeight = howHigh(node.right)

  // return 1 + the Math.max of left and right
  return 1 + Math.max(leftHeight, rightHeight)
};

// bottom right value
// Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

// You may assume that the input tree is non-empty.

const bottomRightValue = (root) => {
  // create variable for  queue
  let queue = [root]
  // create variable outside of the loop and const current to be null
  let current = null;
  
  // create while loop with stopping condition when queue.length > 0
  while( queue.length > 0){
    // assign current = queue.shift()
    current = queue.shift()
    
    // check left children and then right children. 
    // if left children exists, push to queue 
    if(current.left !== null) queue.push(current.left)

    // if right children exists, push to queue
    if(current.right !== null) queue.push(current.right)
  }

  // return the current.val
  return current.val;
};

// all tree paths
// Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

// The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

// You may assume that the input tree is non-empty.

const allTreePaths = (root) => {
  // base case 1
  if(root === null) return [];
  
  // base case 2
  if(root.left === null && root.right === null) return [[root.val]];
  
  // create variable for path
  let path = [];
  
  // call method again
  let leftPath = allTreePaths(root.left);
  let rightPath = allTreePaths(root.right);
  
  // loop thru leftPath
  for (subPath of leftPath) {
    path.push([ root.val,...subPath])
  }
  
  // loop thru rightPath
  for (subPath of rightPath){
    path.push([root.val, ...subPath])
  }
  
  // return path
  return path;
};


// tree levels
// Write a function, treeLevels, that takes in the root of a binary tree. 
// The function should return a 2-Dimensional array where each subarray represents a level of the tree.

const treeLevels = (root) => {
  // edge case
  // if root is null return empty array
  if (root === null) return [];
  // create levels
  const levels = [];
  
  // create stack with an array of root.val inside the stack
  const stack = [ { node: root, levelNum: 0} ];
  
  // create while loop with stopping condition of stack.length > 0
  while (stack.length > 0){
    let { node, levelNum} = stack.pop()
    
    if( levels.length === levelNum) {
      levels.push( [node.val] )
    } else {
      levels[levelNum].push(node.val)
    }
    
    // check for right children
    if (node.right !== null) stack.push({node: node.right, levelNum: levelNum + 1});  
    
    // check for left children
    if (node.left !== null) stack.push({node: node.left, levelNum: levelNum + 1});
    
  }
  
  // return levels
  return levels
};

// level averages
// Write a function, levelAverages, that takes in the root of a binary tree that contains number values. 
// The function should return an array containing the average value of each level.

function levelAverages(root) {
  // edge case
  // if root is null return empty array
  if (root === null) return [];

  // create result array to store the average of each level
  const result = [];
  // create queue to store the nodes; and add the root to the queue
  const queue = [root];
  
  // create while loop with stopping condition of queue.length > 0
  while (queue.length) {
    // create variable for levelSize to the length of queue
    let levelSize = queue.length;
    // create variable for levelSum to 0
    let levelSum = 0;
    // create a for loop with stopping condition of i < levelSize
    for (let i = 0; i < levelSize; i++) {
      // create variable for current to equal queue.shift()
      const current = queue.shift();
      // add current.val to levelSum
      levelSum = levelSum + current.val;
      // check if current.left exists, if so push to queue
      if (current.left) queue.push(current.left);
      // check if current.right exists, if so push to queue
      if (current.right) queue.push(current.right);
    }
    // after the for loop, calculate the average of the level and push to result
    result.push(levelSum / levelSize);
  }

  // return result
  return result;
}


/// test

// function levelAverages(root) {
//   // edge case
//   // if root is null return empty array
//   if (root === null) return [];

//   // create result array to store the average of each level
//   let result = [];
//   // create queue to store the nodes; and add the root to the queue
//   let queue = [root];

//   // create while loop with stopping condition of queue.length > 0
//   while (queue.length > 0) {
//     // create variable for levelSize to the length of queue
//     let levelSize = queue.length;
//     // create variable for levelSum to 0
//     let levelSum = 0;
//     // create a for loop with stopping condition of i < levelSize
//     for (let i = 0; i < levelSize; i++){
//       // create variable for current to equal queue.shift()
//       let current = queue.shift();
//       // add current.val to levelSum
//       levelSum = levelSum + current.val;

//       // check if current.left exists, if so push to queue
//       if(current.left) queue.push(current.left);
//       // check if current.right exists, if so push to queue
//       if(current.right) queue.push(current.right);
//       console.log(levelSum / levelSize)
//       result.push(levelSum / levelSize)
//     }

//     // after the for loop, calculate the average of the level and push to result
//     result.push( levelSum / levelSize)
//   }

//   // return result
//   return result;
// }

// test 2

// Write a function, levelAverages, that takes in the root of a binary tree that contains number values. 
// The function should return an array containing the average value of each level.

// const levelAverages = (root) => {
//   // if root is null, return empty array;
//   if (root === null) return [];

//   // create variable for result;
//   let result = [];

//   // create queue and pass in root in the queue array
//   let queue = [root];

//   // create while loop with a stopping condition of queue.length > 0
//   while ( queue.length > 0) {
//     // create variable for levelSize
//     let levelSize = queue.length;

//     // create variable for levelSum 
//     let levelSum = 0;

//     // create for loop to check each node and add the current.val to the levelSum
//     for (let i = 0; i < levelSize; i++){
//       // create variable for current to shift node from queue
//       let current = queue.shift();

//       levelSum = levelSum + current.val;

//       // check if current.left children exists, if so, push to queue.
//       if (current.left) queue.push(current.left);
//       // check if current.right children exists, if so, push to queue.
//       if (current.right) queue.push(current.right);
//     }

//     // push the average of levelSum / levelSize to the result (?)
//     result.push( levelSum / levelSize)
//   }

//   // return result
//   return result;

// }

// leaf list
// Write a function, leafList, that takes in the root of a binary tree and 
// returns an array containing the values of all leaf nodes in left-to-right order.

const leafList = (root) => {
  // edge case
  if (root === null) return [];
  
  // create result array;
  let leaves = [];
  
  // create stack and initialize with root
  let stack = [root];
  
  // create while loop with stopping condition of stack.length > 0
  while ( stack.length > 0) {
    // pop of that current
    let current = stack.pop();
    
    if(current.left === null && current.right === null) leaves.push(current.val);
    
    // check if there is a current.left children, if so, push to stack
    if (current.right) stack.push(current.right)
    // check if there is a current.right children, if so, push to stack
    if (current.left) stack.push(current.left)
  }
    
  // return result
  return leaves;
};