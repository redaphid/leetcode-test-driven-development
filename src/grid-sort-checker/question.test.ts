
    import {gridsortchecker} from './solution'
    describe('gridsortchecker', () => {
      test("Example 1", () => {
        const grid = [
          ['a','b','c'],
          ['a','d','e'],
          ['e','f','g'],
        ]
        const result = gridsortchecker(grid);
        expect(result).toEqual(true);
      })
    })
    
  
