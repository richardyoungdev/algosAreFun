// Write a function in javascript which finds an integer that appears 
// more than once in our array. Don't modify the input! 
// (If there are multiple duplicates, you only need to find one of them.)

// const array = [1,2,3,4,5,5]

// const findDuplicate = (array) => {
//     // console.log("array-->", array)
//     // create variable named foundDuplicate and equal to a new Set();
//     let foundTwin = new Set();

//     // loop over each elements in the array
//     for (number of array){
//         if (foundTwin.has(number)){
//             console.log("number-->", number)
//             return number;
//         }
//         else {
//             foundTwin.add(number)
//         }
//     }

//     return null

// };

// findDuplicate(array)



// write a function to find all duplicate numbers in an array
const array = [1,2,3,4,4,5,5]

const findAllDuplicates = (array) => {
    // console.log("array-->", array)

    // create new Map to keep track of key-value pairs of duplicate numbers
    const foundAllDuplicates = new Map();
    console.log("foundAllDuplicates-->", foundAllDuplicates)

    // for of each element in the array
    for (number of array){
        
        // if number already exists in the map, increase count by 1
        if (foundAllDuplicates.has(number)){
            let count = foundAllDuplicates.get(number);

            foundAllDuplicates.set(number, count + 1)
        } else {
            foundAllDuplicates.set(number, 1)
        }
    }

    console.log("answer-->", foundAllDuplicates)
    return foundAllDuplicates
};

findAllDuplicates(array)