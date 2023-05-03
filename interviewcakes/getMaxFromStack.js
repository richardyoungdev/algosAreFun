// dummy data
const stack = [1,2,3,4,5,6,7,33,8]

// create function
const getMaxFromStack = (stack) => {
   

    // create max variable to equal -Infinity
    let max = -Infinity;

    // while loop with stopping condition of 0 < stack.length;
    while (0 < stack.length){
        // get the current stack
        let current = stack.pop();
        console.log(current)

        // if current is greater than max, assign max as current
        if (current > max) {
            max = current;
        }
    }

    // return max
    console.log("max-->", max)
    return max;
};

// call function
getMaxFromStack(stack)