
    import {reverseString} from './solution'
    test('reversestring', () => {
      const chars = ['H', 'e', 'l', 'l', 'o']
      const expected = ['o', 'l', 'l', 'e', 'H']
      reverseString(chars)
      expect(chars).toEqual(expected)
    })
    
  
