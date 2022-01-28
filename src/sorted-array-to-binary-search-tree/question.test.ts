
    import {sortedArrayToBST} from './solution'
    xdescribe('sortedArrayToBST', () => {
      test("Example 1", () => {
        const input = [-10, -3, 0,5,9]
        const output = sortedArrayToBST(input)
        expect(output).not.toBeFalsy()
        const {right, left} = output
        expect(left?.val).toEqual(-3)
        expect (left?.left?.val).toEqual(-10)

        expect(right?.val).toEqual(9)
        expect(right?.left?.val).toEqual(5)        
      })
      test("Example 2", ()=>{
        const input = [1,3]
        const output = sortedArrayToBST(input)
        expect(output?.val).toEqual(3)
        expect(output?.left?.val).toEqual(1)
      })
    })
    
  
