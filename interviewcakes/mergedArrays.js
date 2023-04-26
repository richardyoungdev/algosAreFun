const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

const mergeArrays = (myArray, alicesArray) => {
    const mergedArray = [];
    let myIndex = 0;
    let alicesIndex = 0;
  
    while (myIndex < myArray.length || alicesIndex < alicesArray.length) {
      if (myIndex >= myArray.length || myArray[myIndex] > alicesArray[alicesIndex]) {
        mergedArray.push(alicesArray[alicesIndex]);
        alicesIndex++;
      } else {
        mergedArray.push(myArray[myIndex]);
        myIndex++;
      }
    }
    
    console.log("mergedArray: ", mergedArray)
    return mergedArray;
  };
  

mergeArrays(myArray, alicesArray);