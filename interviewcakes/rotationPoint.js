const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ];

const target = "a";

const rotationPoint = (words, target)=>{
    // console.log("words-->", words)
    console.log("words length", words.length)

    let left = 0;
    let right = words.length - 1;

    // while loop with stopping condition of left <= right
    while (left <= right){
        // create mid variable
        let mid = Math.floor((left + right) / 2)

        // if words[mid][0] === target return the index number
        if(words[mid][0] === target){
            console.log("mid-->", mid)
            console.log("words-->", words[mid])
            return mid
        } else if (words[mid][0] > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    

    // return false
    return false;
};

rotationPoint(words, target)