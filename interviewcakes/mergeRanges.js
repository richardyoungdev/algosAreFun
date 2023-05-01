
const meetingTimes = 
  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

// 0 - 1 
// 3 - 8
// 9 - 12

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

const mergeRanges = (meetingTimes) => {
  // console.log("dummy data-->", meetingTimes)

  // sort start meeting times in ascending order
  const sortedMeetings = meetingTimes.sort((a,b) => a.startTime - b.startTime)
//   console.log("sorted start times-->", sortedMeetings)

  // create new array for merged meetings
  let mergedArray = [sortedMeetings[0]];

  // for loop each object in the array
  for (let i = 0; i < sortedMeetings.length; i++){
    // console.log(sortedMeetings[i])
    // create variable for current meeting
    const currentMeeting = sortedMeetings[i];
    // create variable for previousMeeting
    const previousMeeting = mergedArray[mergedArray.length-1];

    // if current meeting's startTime is <= to previousMeeting's endTime, then ...
    if (currentMeeting.startTime <= previousMeeting.endTime){
        // previousMeeting's endTime is equal to the Math.max of current meeting's endTime or previous meeting's endTime.
        previousMeeting.endTime = Math.max(currentMeeting.endTime, previousMeeting.endTime)
    }    

    // else, push the current meeting's time to the mergedMeeting array
    else {
        mergedArray.push(currentMeeting)
    }
  }
  
  // return array of condensed ranges
  console.log("mergedArray-->", mergedArray)
  return mergedArray
};

mergeRanges(meetingTimes)
