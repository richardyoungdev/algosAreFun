// Max-Value

// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// Solve this without using any built-in array methods.

const maxValue = (num) => {
    let value = -Infinity 
    console.log("value 1-->", value)

    // for loop each element in the array to check if it is larger than -Infinity

    // if larger than -Infinity, make that element as the new value

    for (let i = 0; i < num.length ; i++){
        if(num[i] > value) {
            value = num[i];
        }
    }

    // return value
    console.log("value 2-->", value)
    return value
}

// maxValue([4, 7, 2, 8, 10, 9]); // -> 10
// maxValue([10, 5, 40, 40.3]); // -> 40.3
// maxValue([-5, -2, -1, -11]); // -> -1
// maxValue([42]); // -> 42

/////////////

// isPrime

// Write a function, isPrime, that takes in a number as an argument. 
// The function should return a boolean indicating whether or not the given number is prime.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// FYI: Prime numbers are never even (except for 2)

const isPrime = (num)=>{
    if(num < 0 || num === 1) {
        return false;
    }

    // iterate each number starting from 2 and ending at n-1
    for (let i = 2; i < num-1; i++){
    // if divisible by any number besides 1 and itself, return false
        if( num % i === 0) {
            return false
        }
    }

    return true;
    
};

// console.log(isPrime()); // -> true
// isPrime(4); // -> false
// console.log(isPrime(8)); // -> false