// uncompress
// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// for example, '2c' or '3a'.

// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively.

// REACTO Method
// Repeat Q: How to return a string where each char of group is repeated based on number of times?
// Examples:
// let s = "5c3a1t";

// const numbers = "0123456789";

// does s includes any numbers?
// let test = s.includes(4)
// console.log("includes 4-->", test)

// let test2 = Number(numbers)
// console.log(test2)

const uncompress = (string) => {
    let result = "";
    console.log("result-->", result)

    let numbers = "0123456789"
    // setup two pointers
    let i = 0;
    let j = 0;

    while (j < string.length){
        if(numbers.includes(string[j])){
            // if element is a number, increase j by 1.
            j++
        } else {
            // found your end of number.
            const num = Number(string.slice(i, j))

            for(let count = 0; count < num; count++){
                result = result + string[j]
            }

            j++
            i = j
        }
    }

    console.log("end result-->", result)
    return result
};

// uncompress("2c3a1t"); // -> 'ccaaat'

//////

// compress

// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

const compress = (string) => {

    // create a variable result that's an empty array, instead of an empty string.
    let result = [];
    console.log("result from start-->", result)

    // create two pointers
    let i = 0;
    let j = 0;

    // create while loop with a <= sign to include the last element.
    while(j <= string.length){

        // check each element to see if element is the same as the next element?
        // How to optimze your code for compress?
        // JS strings are immutable!

        if(string[i] === string[j]){
            // if element is the same, increase j pointer by 1
            j++
        }
        else {
            // if eleent is NOT the same, calculate the number of letters
            let num = j - i;
            console.log("num-->", num)

            // if element has only one character, only push that element to the array.
            if(num === 1){
                result.push(string[i])
            }
            
            else {
                result.push(num, string[i])
            }

            // move i pointer to j
            i = j
        }
    }

    console.log("result from end-->", result)
    console.log("result.join() from end-->", result.join(""))

    // return result with a join("")
    return result.join("")
};

// compress('ccaaatsss'); // -> '2c3at3s'

/////

// anagram
// learn about hash map
// JS people use obj to hash
// order does not matter; only frequency matters in a hash map

// Write a function, anagrams, that takes in two strings as arguments. 
// The function should return a boolean indicating whether or not the strings are anagrams. 
// Anagrams are strings that contain the same characters, but in any order.

const anagrams = (string1, string2) => {
    // convert string1 to an object and cache 
    let count = {}

    // iterate each element of string1
    for (let char of string1){
        // if first time seeing the char, initialize the char
        // is there a key in obj?
        if(!(char in count)){
            count[char] = 0
        }

        count[char]++
    }

    console.log("count-->", count)

    for (let char of string2){
        if(char in count){
            count[char]--
        } else {
            return false
        }
    } 
   
    for (let char in count){
        if(count[char] !== 0){
            return false;
        }
    }

    console.log("count at end-->", count)
    return true;
};

// console.log(anagrams('restful', 'fluster')); // -> true
// console.log(anagrams('cats', 'tocs')); // -> false

// can NOT compare obj and obj with equality because you'll be checking for same reference of memory.

//////

// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. 
// The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (string) => {
    // convert string to an object and cache data.
    let count = {};

    // iterate each element of string
    for (let char of string) {
        if(!(count[char])){
            count[char] = 0
        }

        count[char]++
    }

    console.log("count-->", count)
    console.log("---------------")

    // find key with the highest value in obj and return that key
    let maxValue = 0;
    let maxChar = "";

    for (let char in count){
        console.log("count[char]-->", count[char])
        console.log(char)

        if(count[char] > maxValue){
            maxValue = count[char];
            maxChar = char;
        }
    }
    console.log("maxChar-->", maxChar)
    return maxChar
}

// mostFrequentChar('bookeeper'); // -> 'e'

///

// pair sum

// Write a function, pairSum, that takes in an array and a target sum as arguments. 
// The function should return an array containing a pair of indices whose elements sum to the given target. 
// The indices returned must be unique.

// const pairSum = (numbers, targetSum) => {
//     for(let i = 0; i < numbers.length; i ++){
//         for(let j = 1; j < numbers.length; j ++){
//             if(numbers[i] + numbers[j] === targetSum){
//                 return [i, j]
//             }
//         }
//     }

// };

// const pairSum = (numbers, targetSum) => {
//     // create hash map
//     let previousNums = {};
//     console.log("previousNums-->", previousNums)
//     console.log("==========")

//     for(let i = 0; i < numbers.length; i++){

//         const num = numbers[i];
//         console.log("targetSum-->", targetSum)
//         console.log("num-->", num)

//         const complement = targetSum - num;
//         console.log("complement-->", complement)
//         console.log("previousNums in for loop-->", previousNums)

//         console.log("==========")

//         if(!(complement in previousNums)){
//             // create keys and values into hash map
//             previousNums[num] = i

//         }
//         else {
//             console.log("complement-->", complement)
//             console.log("previousNums in key-->", previousNums)
            
//             console.log([previousNums[complement], i])

//             return [previousNums[complement], i]
//         }
//     }
// };


// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
// pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
// pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]

// pair product

// Write a function, pairProduct, that takes in an array and a target product as arguments. 
// The function should return an array containing a pair of indices whose elements multiply to the given target. 
// The indices returned must be unique.

const pairProduct = (numbers, targetProduct) => {
    // create hash map
    let hashMap = {};
    
    // iterate each element to check if element is a product of the targetProduct
    for(let i = 0; i < numbers.length; i++){
        // create variable for element
        let num = numbers[i];
        console.log("num-->", num)

        // create variable for complement
        let complement = targetProduct / num
        console.log("complement-->", complement);

        // check if complement in hashMap exists. if key does NOT exist, create key value pair in hashMap.
        if(!(complement in hashMap)){
            hashMap[num] = i
            console.log("previousNum-->", hashMap)
        } else {
            // if complement (ex. 2) does EXIST in the hash map, return an array of complement value and i
            // can I find a 2 in my hashMap?

            // console.log("complement-->", complement)
            // console.log("hashMap in key-->", hashMap)
            
            console.log([hashMap[complement], i])
            console.log("hashMap at end-->", hashMap)

            return [hashMap[complement], i]
        }
    }

};

// pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]


// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. 
// The function should return a new array containing elements that are in both of the two arrays.

const intersection = (a ,b ) => {

    // create variable for result
    let result = [];

    // create variable for new Set() and pass in a as an argument.
    let items = new Set(a)
    console.log("items-->", items)

    // iterate all elements in a and add each element to a new Set()
    // for (let item of a){
    //     items.add(item)
    //     // console.log(items)
    // }

    // iterate all elements in b and check if 
    for (let element of b){
        if(items.has(element)){
            result.push(element)
        }
    }

    // return result
    console.log("result-->", result)
    return result
};

// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
// intersection([2,4,6], [4,2]) // -> [2,4]
// intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
// intersection([0,1,2], [10,11]) // -> []
// const a = [];
// const b = [];
// for (let i = 0; i < 50000; i += 1) {
//   a.push(i);
//   b.push(i);
// }
// intersection(a, b) // -> [0,1,2,3,..., 49999]

// five sort
// Write a function, fiveSort, that takes in an array of numbers as an argument. 
// The function should rearrange elements of the array such that all 5s appear at the end. 
// Your function should perform this operation in-place by mutating the original array. 
// The function should return the array.

const fiveSort = (nums) => {

    // create i pointer, which starts at index 0
    let i = 0;
    // create j pointer, which starts at end of index
    let j = nums.length - 1;

    // iterate each element and stop when i and j pointers are equal. 
    while( i <= j){

        if( nums[j] === 5) {
            
            j--
            
        } else if ( nums[i] === 5 ){

            [nums[i], nums[j]] = [nums[j], nums[i]]
            console.log("nums in while loop-->", nums)

        } else {
            i++
        }
    }

    console.log("final nums array-->", nums)
    return nums
};

// fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5] 





// anagram

const string1 = "taco";
const string2 = "taco"

const anagram = (string1, string2) => {
    // base case
    // if length of string1 does NOT equal to length of string2, return false;
    if (string1.length !== string2.length) return false;

    // create helper function
    // lower case the string
    // split the string into individual chars
    // sort the chars
    // join the chars
    const helperFunction = (str) => str.toLowerCase().split("").sort().join("");

    // return two helper functions
    return helperFunction(string1) === helperFunction(string2)
     
};

// console.log(anagram(string1, string2))

// mostFrequentChar

const s = "tacocatsss"

const mostFrequentChar2 = (s) => {
    // create count object
    const count = {};

    // iterate each char in the string
    for (let char of s){
        if (!(count[char])){
            count[char] = 0
        }

        count[char]++
    }

    // find key with highest value in obj and return that key
    let maxValue = 0;
    let maxChar = "";
    
    // iterate each key in the obj
    for (let char in count){
        console.log("char in count-->", char)
        console.log("count[char]", count[char])

        // if count[char] > maxValue, update the new maxValue as count[char] and maxChar as char
        if(count[char] > maxValue){
            maxValue = count[char];
            maxChar = char;
        }
    }

    
    console.log("maxChar-->", maxChar)
    return maxChar;
};

mostFrequentChar2(s)

    // find key with the highest value in obj and return that key
    // let maxValue = 0;
    // let maxChar = "";

    // for (let char in count){
    //     console.log("count[char]-->", count[char])
    //     console.log(char)

    //     if(count[char] > maxValue){
    //         maxValue = count[char];
    //         maxChar = char;
    //     }
    // }
    // console.log("maxChar-->", maxChar)
    // return maxChar


// pairSum 

const numbers = [3, 2, 5, 4, 1]
const targetSum = 8;

// REACTO
// repeat: how to create a function that inputs an array and a target sum as arguments; and return an array containing
// a pair of indices whose elements sum to given target?

// example: 3 + 5 = 8 and the indices are [0,2]

// approach: 
// 1. use a hash map that gives you O(n) time complexity
// 2. for loop each element in the array to find the complement variable 

const pairSum = (numbers, targetSum) => {
    // create hash map using an obj
    const previousNumbers = {};

    // for loop each element in the array to find the complement variable
    for (let i = 0; i < numbers.length; i++){
        // create variable for current variable
        const number = numbers[i];

        // create variable for complement to check if the remaining element plus number equals to targetSum
        // example: complement = targetSum - number;
        const complement = targetSum - number;

        //  if state to check if complement exists in the hash map, if not, add that element and index into the obj
        if (!(complement in previousNumbers)){
            previousNumbers[number] = i;
        } else {
            return [previousNumbers[complement], i]
        }
    }
};

// pairSum()

// pair product

// REACTO 
// repeat: how to create a function that takes in an array and a target product as arguments?
// the function should return an array containing a pair of indices whose elements multiply to the given target.

// example: 2 * 4 = 8 which would return an array as [1,3]

// approach: use hash map for O(n) time complexity and complement variable to find two elements

// code:


const pairProduct2 = (numbers, targetProduct) => {
    // create hash map with an obj
    const previousNums = {};

    // use for loop to iterate each element in the numbers array
    for (let i = 0; i < numbers.length; i++){
        // create variable for the current num
        const num = numbers[i];

        // create variable for complement
        const complement = targetProduct / num;

        // check if the complement exists in the hash map, if yes, return the complement and index of num
        if (complement in previousNums){
            return [previousNums[complement], i];
        }

        // add the num and its index as a key:value pair into the hash map
        previousNums[num] = i;
    }
};

pairProduct2([3, 2, 5, 4, 1], 8)

// testing for commit

// resume stuff:
// Designed and implemented AI-based software solution at 14 hospitals, providing first time ability to extract and automate 2M+ unstructured data into actionable insights to improve customer experience.

