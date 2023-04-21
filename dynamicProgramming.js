// Function to count the number of paths from the top-left corner to the bottom-right corner of a grid
const countPaths = (grid, r = 0, c = 0, memo = {}) => {
    // Create a string to represent the current position in the grid
    const pos = r + "," + c;

    // If the current position is already in the memo object, return the precomputed value
    if ( pos in memo ) return memo[pos];

    // If the current position is outside the grid boundaries or contains an obstacle 'X', return 0
    if ( r === grid.length || c === grid[0].length || grid[r][c] === "X") return 0;

    // If the current position is the bottom-right corner of the grid, return 1
    if ( r === grid.length - 1 && c === grid[0].length -1 ) return 1;

    // Compute the number of paths recursively using memoization
    memo[pos] = countPaths(grid, r + 1, c, memo) + countPaths(grid, r, c + 1, memo);
    
    // Return the number of paths from the current position to the bottom-right corner of the grid
    return memo[pos];
};


// max path sum
// Write a function, maxPathSum, that takes in a grid as an argument. 
// The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. 
// You may only travel through the grid by moving down or right.

// You can assume that all numbers are non-negative.

