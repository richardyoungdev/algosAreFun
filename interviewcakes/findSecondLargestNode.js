function findSecondLargesttreeRoot(treeRoot) {
    // If the tree is empty or has only one treeRoot, return null
    if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
      return null;
    }
  
    let current = treeRoot;
    while (current) {
      // If the current treeRoot has a right child but no right subtree,
      // the second largest treeRoot is the largest treeRoot in the left subtree
      if (current.right && !current.right.left && !current.right.right) {
        return current;
      }
      // If the current treeRoot does not have a right child, the second largest
      // treeRoot is the parent of the largest treeRoot (i.e., the treeRoot with the largest
      // value in the left subtree)
      if (!current.right) {
        return current.left;
      }
      current = current.right;
    }
};

//
const findSecondLargestNode = (treeRoot) => {
    // if the tree is empty or has only one treeRoot, return null;
    if (!treeRoot || !treeRoot.left && !treeRoot.right) return null;

    // create variable named current to equal to treeRoot;
    let current = treeRoot;

    // while loop with stopping condition of just passing in current
    while(current){
        // if the current treeRoot has a right child but no right subtree,
        // the second largest treeRoot is the largest treeRoot in the left subtree
        if( current.right && !current.right.left && !current.right.right){
            return current;
        }

        // if the current treeRoot does NOT have a right child, the second largest 
        // treeRoot is the parent of the largest treeRoot aka the treeRoot with the largest value in the left subtree.
        if (!current.right) return current.left

        current = current.right
    }

};
  