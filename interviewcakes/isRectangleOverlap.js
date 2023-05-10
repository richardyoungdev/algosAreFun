// console.log("hello")

const rec1 = [0,0,1,1];
const rec2 = [1,1,3,3]
const isRectangleOverlap = (rec1, rec2) => {
    // destructure to create variables for the rectangle (x,y) points
    // green box
    const [A,B,C,D] = rec1;
    // yellow box
    const [E,F,G,H] = rec2;
    
    // check if yellow box is to the right of green box. 
    // if so, the x axis of the yellow box should be greater than the x2 axis of the green box

    if (E >= C || F >= D || G <= A || H <= B){
        return false
    }

    // return true;
    console.log("true!")
    return true
};

isRectangleOverlap(rec1, rec2)