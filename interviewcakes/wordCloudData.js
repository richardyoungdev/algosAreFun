
// Write code that takes a long string and builds its word cloud data in a map, 
// where the keys are words and the values are the number of times the words occurred.

// const string =   "I love cheese! Do you also love cheese? My name is Cheese!!!"

const wordCloudData = (string) => {
    // console.log("string-->", string)

    // create variable for new Map()
    // this is where we store our key - value pairs.con
    const myMap = new Map();
    console.log("myMap-->", myMap)

    // split each word in the string and do not account for the punctuation marks.
    const wordsSplit = string.split(/[ .,:;?!'"]+/)
    console.log("wordsSplit-->", wordsSplit)

    // for of loop on each element in the wordsSplit array
    for (let word of wordsSplit){
        console.log("word-->", word)

        const wordLowerCase = word.toLowerCase();

        // if word is in myMap, increase the value by 1
        if (myMap.has(wordLowerCase)){

            // get the value of the word and initialize it as a count variable
            const count = myMap.get(wordLowerCase)
            myMap.set(wordLowerCase, count + 1)
        } 
        
        else {
            myMap.set(wordLowerCase, 1)
        }

    }

    // return data from the new Map()
    console.log("myMap 2-->", myMap)
    return myMap
};

wordCloudData(string)


// const dummyData = "Hello World, I love David and his other twin named david! LOL" 
// function getWordCount(dummyData) {
//     const myMap = new Map();
//     //.has .set .get 

//     const splitData = dummyData.split(/[ .,!:;"'?]+/)
    
//     for(let word of splitData) {
//         if(myMap.has(word.toLowerCase())) {
//             const count = myMap.get(word)
//             myMap.set(word.toLowerCase(), count + 1)
//         } else {
//             myMap.set(word.toLowerCase(), 1)
//         }
//     }
    
//     console.log(splitData)
//     console.log(myMap)
// }
// getWordCount(dummyData) 