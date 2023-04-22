console.log("hello world");

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes)
// and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// const flightLength = 60;
// const movieLengths = [30, 30]

// const inFlightEntertainment = (flightLength, movieLengths)=>{

//     // if the sum of movieLengths equals flightLength, return true
//     let totalMovieTime = movieLengths[0] + movieLengths[1]

//     if (flightLength === totalMovieTime){
//         return true;
//     } else {
//         return false;
//     }

// };

// console.log(inFlightEntertainment(flightLength, movieLengths))

// option 2

// const inFlightEntertainment = (flightLength, movieLengths) => {
//     // create variable for new Set()
//     const movieSet = new Set();

//     // for loop each element in the movieLengths
//     for (let i = 0; i < movieLengths.length; i++) {
//         // create variable for the first movie length
//         const firstMovieLength = movieLengths[i];
//         // create variable for the second movie length
//         // the equation is ... secondMovieLength = flightLength - firstMovieLength
//         const secondMovieLength = flightLength - firstMovieLength;

//         // if the movieSet has secondMovieLength, return false
//         if (movieSet.has(secondMovieLength)) {
//             return true;
//         }

//         // add the length of the first movie to the set()
//         movieSet.add(firstMovieLength);
//     }

//     // return false
//     return false;
//   };

//   console.log(inFlightEntertainment(flightLength, movieLengths))

let flightLength = 60;
let movieLengths = [10, 20, 50];

const inFlightEntertainment = (flightLength, movieLengths) => {
  // use set() to track movie times
  const movieTimes = new Set();

  // for loop on movieLengths to check if two movie times can equal to flightLength
  for (let i = 0; i < movieLengths.length; i++) {
    // create variable for first movie length
    const firstMovieLength = movieLengths[i];

    // create variable for second movie length
    const secondMovieLength = flightLength - firstMovieLength;

    // if movieTimes has secondMovieLength, return true
    if (movieTimes.has(secondMovieLength)) {
      console.log("true!");
      return true;
    }

    // add firstMovieLength to set()
    movieTimes.add(firstMovieLength);
  }

  // return false
  console.log("false!");
  return false;
};

inFlightEntertainment(flightLength, movieLengths);
