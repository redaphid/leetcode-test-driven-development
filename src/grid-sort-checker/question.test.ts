
    import {_gridsortchecker, gridStringToGrid} from './solution'
    describe('gridsortchecker', () => {
      test("Example 1", () => {
        const grid = [
          ['a','b','c'],
          ['a','d', 'e'],
          ['e','f','g'],
        ]
        const result = _gridsortchecker(grid);
        expect(result).toEqual(true);
      })
      test("Example 2", () => {
        const grid = [
          ['a','b','c'],
          ['q','d', 'e'],
          ['a','e','f'],
        ]
        const result = _gridsortchecker(grid);
        expect(result).toEqual(false);
      })
      describe("gridStringToGrid", () => {
        test("Example 1", () => {
          const grid = [
            'abc',
            'ade',
            'efg',          
          ]
          const result = gridStringToGrid(grid);
          const row1 = result[0]
          expect(row1).toEqual(['a','b','c'])
        })
      })
    })
    
  
