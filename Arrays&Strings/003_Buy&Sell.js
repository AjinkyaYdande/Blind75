// brute force approach O(n^2) time complexity
function buyAndSellStock(prices) {
    let minVal = Infinity;
    let maxProfit = 0;

    for (let i = 0; i <= prices.length; i++) {
        if(minVal > prices[i]){
            minVal = prices[i];
        }else{
            let profit = prices[i] - minVal;
            if(profit > maxProfit){
                maxProfit = profit
            }
        }
    }
    return maxProfit;
}
console.log(buyAndSellStock([6,8,1,2,30,19]));

// optimal approach O(n) time complexity
function buyAndSellStockOptimised(prices){
    let minVal = Math.min(...prices);
    let maxProfit = 0;

    for(let price of prices){   
        minVal = Math.min(minVal, price);
        maxProfit = Math.max(maxProfit, price - minVal);
    }
    return maxProfit;
}
console.log(buyAndSellStockOptimised([6,8,1,2,30,19]));