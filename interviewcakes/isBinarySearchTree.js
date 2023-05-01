function isBinarySearchTree(treeRoot, lowerBound = -Infinity, upperBound = Infinity) {
    // If the current node is null, return true since an empty tree is a valid BST
    if (!treeRoot) return true;

    // If the current node value is outside the specified bounds, return false
    if (treeRoot.value < lowerBound || treeRoot.value > upperBound) {
        return false;
    }

    // Recursively check if the left subtree is a valid BST with a new upper bound
    const leftSubtree = isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value - 1);

    // Recursively check if the right subtree is a valid BST with a new lower bound
    const rightSubtree = isBinarySearchTree(treeRoot.right, treeRoot.value + 1, upperBound);

    // Combine the results of the recursive calls on the left and right subtrees using the logical AND operator
    return leftSubtree && rightSubtree;
}

const isBinarySearchTree = (treeRoot, lowerBound = -Infinity, upperBound = Infinity) => {
    // if the current node is null, return true since en empty tree is a valid BST
    if (!treeRoot) return true;

    // if the current node value is outside the specified bounds, return false;
    if (treeRoot.value < lowerBound || treeRoot.value > upperBound) return false;

    // recursively check if that left subtree is valid BST with a new upper bound;
    const leftSubtree = isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value - 1);
    // recursively check if that right subtree is valid BST with a new lower bound;
    const rightSubtree = isBinarySearchTree(treeRoot.right, treeRoot.value + 1, upperBound);

    return leftSubtree && rightSubtree
};