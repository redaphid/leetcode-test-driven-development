
    import {Solution} from './solution'
    describe('shufflearrayclass', () => {
      test("Example 1", () => {
        const c = new Solution([1,2,3,4,5,6,7,8,9,10])
        const a = c.shuffle()
        expect(a).toEqual(expect.arrayContaining([1,2,3,4,5,6,7,8,9,10]))
      })
    })
    
  
