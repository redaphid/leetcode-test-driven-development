function maxProfit(prices: number[]): number {
  if(prices.length === 0) return 0;
    let startPrice = prices[0];
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < startPrice) {
            startPrice = prices[i];
        }
        
    }
    let endPrice = prices[prices.length - 1];
    for(let i = prices.length - 1; i >= 0; i--) {
        if(prices[i] > endPrice) {
            endPrice = prices[i];
        }
    }
    return endPrice - startPrice;
}
export { maxProfit };
