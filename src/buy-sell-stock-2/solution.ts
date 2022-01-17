function maxProfit(prices: number[]): number {
  let buyDay = 0;
  let sellDay = 0;
  let bestProfit = 0;
  let longest = 0;
  for (let d1 = 0; d1 < prices.length; d1++) {
    for (let d2 = d1; d2 < prices.length; d2++) {
      const p1 = prices[d1];
      const p2 = prices[d2];
      const profit = p2 - p1;
      if (profit <= 0) continue;

      const length = d2 - d1;
      if (length < longest) continue;
      buyDay = d1;
      sellDay = d2;
      bestProfit = p2 - p1;
      longest = length
    }
  }
  console.table({buyDay,sellDay,bestProfit, longest});
  if(longest === 0) return bestProfit
  return bestProfit + maxProfit(prices.slice(buyDay +1, sellDay+1));
}
export { maxProfit };
