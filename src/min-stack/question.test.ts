
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
      test("Example 2", () => {
        const sut = new MinStack()
        sut.push(-2)
        sut.push(0)
        sut.push(-1)
        expect(sut.getMin()).toBe(-2)
        
        sut.pop()
        expect(sut.top()).toBe(0)
        expect(sut.getMin()).toBe(0)
      })
      test("getMin() should return the minimum value in the stack", () => {
        const sut = new MinStack()
        sut.push(-2)
        sut.push(-5000)
        sut.push(-1)
        expect(sut.getMin()).toBe(-5000)
      })
    })
    
  
