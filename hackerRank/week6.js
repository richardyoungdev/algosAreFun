// forming a magic square
// https://www.hackerrank.com/challenges/magic-square-forming/problem

const formingMagicSquares = (s) => {

    // step 1: initialize magic squares and minimum cost variable

    const magicSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],    
    ]

    let minCost = Infinity;

    // step 2: iterate over each magic square
    for (let magicSquare of magicSquares){
        // step 3: calculate cost for transforming given matrix into current
        // magic square
        let cost = 0;

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                // calculate abs difference between s[i][j] and magicSquare[i][j];
                cost = cost + Math.abs(s[i][j] - magicSquare[i][j]);
            }
        }

        // step 4: update minimum cost if current cost is smaller than minCost
        minCost = Math.min(minCost, cost);
    }

    return minCost;
};