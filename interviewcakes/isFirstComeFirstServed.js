const takeOutOrders = [17, 8, 24];
const dineInOrders =  [12, 19, 2];
const servedOrders = [17, 8, 12, 19, 24, 2];

// Given all three arrays, write a function to check that my service is first-come, first-served. 
// All food should come out in the same order customers requested it.

// REACTO METHOD

// repeat: how to write a function to check that my service is first-come, first-served?
// examples: 

const isFirstComeFirstServed = (takeOutOrders, dineInOrders, servedOrders) => {
    // console.log("takeOutOrders-->", takeOutOrders)
    // console.log("dineInOrders-->", dineInOrders)
    // console.log("servedOrders-->", servedOrders)

    // create two pointers starting at 0 index for takeOutOrders and dineInOrders
    let takeOutOrdersIndex = 0;
    let dineInOrdersIndex = 0;

    // for loop each element on servedOrders to check if each element matches the elements in the two orders
    for (let i = 0; i < servedOrders.length; i++){
        // create variable for order
        const order = servedOrders[i];

        // if there are still elements in takeOutOrders and if current order matches the takeOutOrders nth index, increase takeOutOrdersIndex by 1
        if (takeOutOrdersIndex <= takeOutOrders.length -1 && order === takeOutOrders[takeOutOrdersIndex]){
            takeOutOrdersIndex++
        }
        // else if there are still elements in dineInOrders and if current order matches the dineInOrders nth index, increase dineInOrdersIndex by 1
        else if (dineInOrdersIndex <= dineInOrders.length -1 && order === dineInOrders[dineInOrdersIndex]){
            dineInOrdersIndex++
        }
        // else, there is not a match. therefore, the servedOrders are not in order. return false;
        else {
            return false;
        }

        // check for any extra orders at the end of takeOutOrders or dineInOrders
        if (servedOrders.length !== (takeOutOrders.length + dineInOrders.length)) return false;


        // if no false above, return true that all servedOrders are in order
        console.log("true!")
        return true;
    }
}

isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders)