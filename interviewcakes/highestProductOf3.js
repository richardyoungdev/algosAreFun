// Given an array of integers, find the highest product you can get from three of the integers.

// const array = [1, 10, -5, 1, -100]

// const highestProductOf3 = (array)=>{
//     // console.log("array-->", array)

//     // sort the array from descending order
//     const sorted = array.sort((a,b) => b - a)
//     console.log("sorted array-->", sorted)

//     // find the highestProduct of 3
//     // find the highest products from index 0-2
//     const firstThreeProducts = sorted[0] * sorted[1] * sorted[2];
//     console.log("firstThreeProducts", firstThreeProducts)
    
//     // find the highest products from index 0 and indexes sorted.length - 1 and sorted.length -2
//     const firstAndLastTwoProducts = sorted[0] * sorted[sorted.length -2] * sorted[sorted.length -1]
//     console.log("firstAndLastTwoProducts", firstAndLastTwoProducts)

//     // create variable to find highest products of 3 by comparng the firstThree and firstAndLastTwo
//     const highestProductsOf3 = Math.max(firstThreeProducts, firstAndLastTwoProducts)
//     // return highestProductsOf3

//     console.log("final answer:", highestProductsOf3)
//     return highestProductsOf3
// };

const array = [1, 10, -5, 1, -100]

const highestProductOf3 = (array) => {
    console.log("array:", array)

    // create variables to find the highest 3 integers and the lowest two integers in a single pass through the input array.
    // initialize highest and lowest to the first two integers in the input array
    let highest = Math.max(array[0], array[1]);
    let lowest = Math.min(array[0], array[1])
    // initialize highestProductOfTwo and lowestProductOfTwo to the product of the first two integers
    let highestProductOfTwo = array[0] * array[1];
    // initialize lowestProductOfTwo
    let lowestProductOfTwo = array[0] * array[1];
    // initialize highestProductOfThree to the product of the first three integers
    let highestProductOfThree = array[0] * array[1] * array[2];

    // for loop the array and i to start at 2 because we already considered the first two integers in the input array
    for (let i = 2; i < array.length; i++){
        // create variable for current to equal to array[i];
        const current = array[i];

        // find the max of the highestProductOfThree 
        highestProductOfThree = Math.max(
            highestProductOfThree,
            current * highestProductOfTwo,
            current * lowestProductOfTwo
        )
        // find the max of the highestProductOfTwo
        highestProductOfTwo = Math.max(
            highestProductOfTwo,
            current * highest,
            current * lowest
        )
        // find the lowest of the lowestProductOfTwo
        lowestProductOfTwo = Math.min(
            lowestProductOfTwo,
            current * lowest,
            current * highest
        )
        // update highest variable
        highest = Math.max(highest, current);
        // update lowest variable
        lowest = Math.min(lowest, current)
    }

    console.log("return highest product of three:", highestProductOfThree)
    return highestProductOfThree

};

highestProductOf3(array)
