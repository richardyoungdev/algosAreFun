const array = [1, 2, 3, 4];

// Declare a function named "productExceptSelf" that takes an array as its argument
const productExceptSelf = (array) => {
  
  // Declare an empty array named "res"
  let res = [];

  // Declare a variable named "start" and initialize it to 1
  let start = 1;

  // Loop through each element in the input array
  for (let i = 0; i < array.length; i++) {
    
    // Push the current value of "start" to the "res" array
    res.push(start);
    
    // Multiply "start" by the current element in the input array
    console.log("start-->", start)
    start = start * array[i];
  }

  console.log("res-->", res)

  // Declare a variable named "start2" and initialize it to 1
  let start2 = 1;

  // Loop through each element in the input array in reverse order
  for (let i = array.length - 1; i >= 0; i--) {
    
    // Multiply the current element in the input array by "start2" and assign the result to the current element in the "res" array
    res[i] = start2 * res[i];
    console.log("res[i]-->", res[i])
    
    // Multiply "start2" by the current element in the input array
    console.log("start2-->", start2)
    start2 = start2 * array[i];
  }

  // Return the "res" array
  console.log("return res-->", res)
  return res;
};

// Call the "productExceptSelf" function with the "array" array as its argument and log the result to the console
productExceptSelf(array)
