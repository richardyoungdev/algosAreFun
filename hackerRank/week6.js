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

// counterGame
const counterGame = () => {
    let count = 0;

    // base caes: if n is already 1, Richard wins. return "Richard"
    if (n === 1) return "Richard";

    // step 1: check if n is a power of 2 using a helper function
    function isPower2(n) {
        while (n >1) {
            if (n % 2 !== 0) return false;
            n = n / 2;
        }

        return false;
    }

    // step 2: find next lower power of 2
    function nextLower(n) {
        let count = 0;

        while ( n > 1){
            count++
            n = Math.floor(n/2);
        }

        return 2** count;
    }

    // step 3: game simulation
    while ( n > 1 ) {
        if(isPower2(n)){
            // if n is a power of 2, halve it
            n = n / 2;
            count++
        } else {
            // if n is not a power of 2, subtract the next lower power of 2 from it
            n = n - nextLower(n);
            count++
        }
    }

    // step 4: determine winner based on count;
    return count % 2 === 0 ? "Richard" : "Louise";
};