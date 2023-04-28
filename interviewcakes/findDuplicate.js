// Write a function in javascript which finds an integer that appears 
// more than once in our array. Don't modify the input! 
// (If there are multiple duplicates, you only need to find one of them.)

const array = [1,2,3,4,5,5]

const findDuplicate = (array) => {
    // console.log("array-->", array)
    // create variable named foundDuplicate and equal to a new Set();
    let foundTwin = new Set();

    // loop over each elements in the array
    for (number of array){
        if (foundTwin.has(number)){
            console.log("number-->", number)
            return number;
        }
        else {
            foundTwin.add(number)
        }
    }

    return null

};

findDuplicate(array)