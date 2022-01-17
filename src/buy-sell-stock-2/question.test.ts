
    import {maxProfit} from './solution'
    describe('maxProfit', () => {
      test("Example 1", () => {
        const prices = [7,1,5,3,6,4]
        const bestPrice = 7
        const result = maxProfit(prices)
        expect(result).toEqual(bestPrice)
      })
    })
    
  
