
    import {reverse} from './solution'

    describe('reverse', () => {
      test("Example 1", () => {
        const input = 123
        const expected = 321
        const result = reverse(input)
        expect(result).toEqual(expected)
      })
      test("Example 2", () => {
        const input = -123
        const expected = -321
        const result = reverse(input)
        expect(result).toEqual(expected)
      })
    })

    
  
