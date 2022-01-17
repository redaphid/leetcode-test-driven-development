
type Gain = {
  d1: number,
  d2: number,
  profit: number,
  length: number
}

function maxProfit(prices: number[]): number {
  const gainz = findGainz(prices)
  if(gainz.length === 0) return 0
  const longestPeriod = gainz.sort((a,b) => b.length - a.length)[0]
  const smallerGainz = findGainz(prices.slice(
    longestPeriod.d1,
    longestPeriod.d2,
    ))
  console.table({gainz, smallerGainz})
  return 0
}
  

function findGainz(prices: number[]): Gain[] {
let gainz: any[] = []
for(let d1 = 0; d1 < prices.length; d1++){
    for(let d2 = d1; d2 < prices.length; d2++ ){
        const p1 = prices[d1]
        const p2 = prices[d2]
        const profit = p2 - p1
        if(profit > 0){
            const gain = {
              d1,
              d2,
              profit,
              length: d2 - d1,
            }          
            gainz.push(gain)
        }
    }
}
return gainz
}



export {maxProfit}

  
