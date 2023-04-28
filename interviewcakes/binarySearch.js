const numbers = [1, 3, 5, 7, 9];
const target = 5;

// create function to do a binary search to find the index number of a target in numbers array

const binarySearch = (target, numbers) => {
    console.log("numbers-->", numbers)
    // set the left and right pointers to the beginning and end of the array
    let left = 0;
    let right = numbers.length-1;

    // while loop with stopping condition of left is less than or equal to right
    while (left <= right){
        // find the middle index of the array
        let mid = Math.floor((left + right) / 2)
        console.log("mid-->", mid)
        // 0 + 5 / 2 = 2.5 ==> Math.floor ... make it a 2.

        // if the middle element is the target, return its index
        if(numbers[mid] === target){
            return mid
        } 

        // else if the middle element is less than target, search the right half of the array
        else if (numbers[mid] < target){
            left = mid + 1;
        }

        // else if the middle element is greater than target, search the left half of the array
        else {
            right = mid - 1;
        }
    }

    // return false
    return false
};

binarySearch(target, numbers)