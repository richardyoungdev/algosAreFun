// uncompress

// Pseudo code:
// Define a function named uncompress that takes a string s as input
// const uncompress = (s) => {
//     // Initialize an empty array to store the result
//     let result = [];
//     // Define a string containing all digits
//     const numbers = '0123456789';
//     // Initialize i to 0
//     let i = 0;
//     // Initialize j to 0
//     let j = 0;
  
//     // Loop until j reaches the end of the input string s
//     while (j < s.length) {
//       // Check if the character at index j is a digit
//       if (numbers.includes(s[j])) {
//         // If it is a digit, increment j by 1
//         j += 1;
//       } else {
//         // Extract the substring from i to j (excluding j), convert it to a number
//         const num = Number(s.slice(i, j));
//         // Repeat the character at index j num times and push it to the result array
//         for (let count = 0; count < num; count += 1) {
//           result.push(s[j]);
//         }
//         // Move j to the next character after the repeated character
//         j += 1;
//         // Move i to the same position as j
//         i = j;
//       }
//     }
  
//     // Join all elements of the result array into a string and return it
//     return result.join('');
//   };

// const s = "3s1e1x2y"

// REACTO

// repeat - create a function to uncompress a string. 
// the output should be formatted into multiple groups according to the string pattern
  

const uncompress = (s) => {
    // console.log(s)
    // create empty array to store the result
    let result = [];

    // variable for numbers from 0 to 9
    const numbers = "0123456789";

    // create two pointers to track the indexicies
    let i = 0;
    let j = 0;

    // use while loop with stopping condition of j < s.length;

    while (j < s.length){
        // if numbers includes s[j], increment j by 1 to find the end of the number and the next a-z char
        if (numbers.includes(s[j])){
            j++
        }

        // else you found the number, so create a variable for that number
        else {
            const number = Number(s.slice(i, j))

            // use for loop to create number of chars to the result
            for (let count = 0; count < number; count++){
                result.push(s[j])
            }

            // update i and j pointers
            // increment j pointer by 1;
            j++

            // update i pointer to meet with updated j pointer
            i = j;
        }
    }


    // return result with a join("")
    return result.join("");
};

// console.log(uncompress(s))

// compress

// REACTO

// repeat - how to create a function to return a compressed version of the string where 
// consercutive occurrences of same char are compressed into number of occurrences followed by the char

// approach - use two pointers -- i and j-- to track indexcies and while loop with stopping condition of j < s.length

// const compress = (s) => {
//     // create a result array
//     let result = [];
//     let i = 0;
//     let j = 0;
//     // iterate through the string
//     while(j <= s.length) {
//         // if the character at j is the same as the character at i, increment j
//         if (s[i] === s[j]) {
//             j++;
//         } else {
//             // if the character at j is not the same as the character at i, slice the string from i to j
//             const num = j - i;
//             // push the character num times into the result array
//             if (num === 1) {
//             // if the number is 1, just push the character
//               result.push(s[i]);
//             } else {
//               result.push((num), s[i]);
//             }
//             i = j;
//           }
//         }
        
//         return result.join('');
// };

const s = "ccaaatsss"

const compress = (s) => {
    // create result array
    let result = [];

    // create two pointers
    let i = 0;
    let j = 0;

    // use while loop with stopping condition of j < s.length to iterate 
    while (j <= s.length){
        // if the char of s[j] strickly equals to the same char of s[i], increment j by 1 to find the next char
        if (s[j] === s[i]){
            j++
        } 
        
        // else when s[j] finds next char, create a number variable
        else {
            const number = j - i;

            // if number === 1, push just the char
            if (number === 1){
                result.push(s[i])
            }

            // use the number variable to push both number and char to result array
            else {
                result.push(String(number), s[i])
            }    
            // update i pointer
            i = j;
        }
    }

    // return result array with a join method
    return result.join("")

};

// console.log(compress(s))

// fizzBuzz

// REACTO
// repeat - how to create a function that prints a value based on the following information:
// if i is a multiple of both 3 and 5, print FizzBuzz;
// if i is a multiple of 3, print Fizz,
// if i is a multiple of 5, print Buzz.

const n = 100;

const fizzBuzz = (n) => {
    // console.log(n)
    // use for loop to print from 1 to 100, inclusive
    for (let i = 1; i <= n; i++){
        // if i is a multiple of both 3 and 5, print FizzBuzz;
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }

        // if i is a multiple of 3, print Fizz,
        else if (i % 3 === 0) {
            console.log("Fizz")
        }

        // if i is a multiple of 5, print Buzz.
        else if (i % 5 === 0) {
            console.log("Buzz");
        }

        else {
            console.log(i)
        }
    }
    
};

// fizzBuzz(n)

// intersection
// reacto
// repeat: how to create a function that takes in two arguments: a and b as arrays.
// the function returns a new array containing elements that are in both of the two arrays.

const intersection = (a,b) => {
    // create results variable
    let results = [];

    // create new Set() to store the a elements
    let newSet = new Set();

    // iterate each element in a array
    for (let element of a){
        // add each element into the set
        newSet.add(element);
    }

    // iterate each element in b and check if b exists in a. 
    for (let element of b){
        if(newSet.has(element)){
            results.push(element)
        }
    }

    return results;
};

intersection([4,2,1,6], [3,6,9,2,10])

