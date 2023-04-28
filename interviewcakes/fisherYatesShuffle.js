// REACTO

// repeat: how to write a function for doing an in-place shuffle of an array? aka do the fisher-yeates shuffle

// examples: 
const array = [1,2,3,4,5];
// console.log("array-->", array)

const fisherYatesShuffle = (array) => {
    console.log("array-->", array)

    // for loop each element in the array
    for (let i = array.length-1; i >= 1; i--){
        // create j pointer to get random number from the array
        const j = Math.floor(Math.random() * (i+1))
        console.log("j-->", j);

        // swap the numbers
        // let temp = array[i];

        // array[i] = array[j];
        // array[j] = temp

        [array[i], array[j]] = [array[j], array[i]]
    }

    // return array
    console.log("shuffled array-->", array)
    return array
};

fisherYatesShuffle(array)