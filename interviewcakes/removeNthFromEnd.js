// REACTO

// repeat - how to create a function to find nth node from the end to delete and return its head?

// example -
const array = [1,2,3,4,5];
n = 2

// approach
const removeNthFromEnd = (array, n) => {
    console.log("array-->", array)
    // edge case
    // if n < 0 , return array
    if (n < 0) return array;

    // create variable to find indexNumber
    let indexNumber = array.length - n;

    // use splice method to remove nth node from end of the array
    let nodeRemoved = array.splice(indexNumber, 1);
    console.log("nodeRemoved-->", nodeRemoved)
    // return new head
    console.log("array-->", array)
    return array;
};

removeNthFromEnd(array, n);
