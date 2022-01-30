
    import {MinStack} from './solution'
    describe('MinStack', () => {
      test("Example 1", () => {
        const sut = new MinStack()
        sut.push(-2)
        sut.push(0)
        sut.push(-3)
        expect(sut.getMin()).toBe(-3)
        
        sut.pop()
        expect(sut.top()).toBe(0)
        expect(sut.getMin()).toBe(-2)
      })
    })
    
  
