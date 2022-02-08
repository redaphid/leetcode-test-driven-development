
import { qusing2stacks, CmdProcessor } from './solution'
describe('qusing2stacks', () => {
  test("Smoke test", () => {
    const input = [
      "10", "1 42", "2", "1 14", "3", "1 28", "3", "1 60", "1 78", "2", "2"
    ]
    const expected = [
      "14", "14"
    ]
    expect(qusing2stacks(input)).toEqual(expected)
  })
  describe("CmdProcessor", () => {
    it("should exist", () => {
      expect(CmdProcessor).toBeDefined()
    })
    describe("When constructed with enqueue, dequeue, and print fns", () => {
      let cmd
      beforeEach(() => {
        cmd = new CmdProcessor({
          enqueue:jest.fn(),
          dequeue:jest.fn(),
          print:jest.fn(),
        })
        it("should exist", ()=>{
          expect(cmd).toBeDefined()
        })
      });
    })
  })
})


