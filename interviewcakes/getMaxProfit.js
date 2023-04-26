// const stockPrices = [10, 7, 5, 8, 11, 9];

// const getMaxProfit = (stockPrices) => {
//   console.log("stockPrices-->", stockPrices);

//   let minPrice = stockPrices[0];
//   let maxProfit = stockPrices[1] - stockPrices[0];

//   // for loop stockPrices
//   for (let i = 1; i <stockPrices.length; i++){
//     // create variable for currentPrice
//     const currentPrice = stockPrices[i];

//     // check for potential profit
//     const potentialProfit = currentPrice - minPrice;

//     minPrice = Math.min(minPrice, currentPrice);
//     maxProfit = Math.max(maxProfit, potentialProfit)
    
//   }

//   console.log("maxProfit-->", maxProfit)
//   return maxProfit;
// };

// getMaxProfit(stockPrices);
// // Returns 6 (buying for $5 and selling for $11)

const stockPrices = [10, 7, 5, 8, 11, 9];

// Write an efficient function that takes stockPrices and returns the best profit 
// I could have made from one purchase and one sale of one share of Apple stock yesterday.

const getMaxProfits = (stockPrices) => {
  console.log("stockPrices:", stockPrices)

  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++){
    let currentPrice = stockPrices[i]; // 11

    // check for potentialMaxProfit
    const potentialMaxProfit = currentPrice - minPrice // 11 - 5 = 6

    maxProfit = Math.max(maxProfit, potentialMaxProfit) // (?, 6)
    minPrice = Math.min(minPrice, currentPrice) // (?, 5)

  }

  // return the maxProfit
  console.log("maxProfit-->", maxProfit)
  return maxProfit

};

getMaxProfits(stockPrices)
