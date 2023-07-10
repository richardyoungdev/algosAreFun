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

const s = "3s1e1x2y"

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

console.log(uncompress(s))