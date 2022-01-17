function maxProfit(prices: number[]): number {  
  for(let d1 = 0; d1 < prices.length; d1++){
      for(let d2 = d1; d2 < prices.length; d2++ ){
          const p1 = prices[d1]
          const p2 = prices[d2]
          if(p1 < p2){
              console.log(`I could buy on day ${d1} and sell on ${d2}, for a profit of ${p2-p1}`)
          }
      }
  }
  return 0
}
export {maxProfit}

  
