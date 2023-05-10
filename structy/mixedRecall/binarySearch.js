const binarySearch = (numbers, target) => {
    // todo
    // console.log("numbers-->", numbers)
    // console.log("target-->", target);
    // create two pointers. 
    // one pointer is the high pointer
    let high = numbers.length -1;
    
    // the second pointer is the low pointer
    let low = 0;

    
    // while loop with stopping condition of low < high
    while (low <= high){
        // find mid 
        let mid = Math.floor((high + low)/2)
        console.log("mid-->", mid)

        // if target < numbers[mid], the new high is mid - 1
        if (target < numbers[mid]){
            high = mid - 1;
        } else if (target > numbers[mid]){
            low = mid + 1;
        } else {
            console.log("mid2-->", mid)
            return mid;
        }
    }

    return -1
  };

binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9); // -> 6

