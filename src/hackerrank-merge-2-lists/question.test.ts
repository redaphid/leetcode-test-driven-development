import {
  mergeLists,
  SinglyLinkedList,
} from "./solution";
describe("mergeLists", () => {
  describe("Given 2 lists", () => {
    let l1, l2, result;
    describe("When both lists are null", () => {
      beforeEach(() => {
        result = mergeLists(l1, l2);
      });
      it("should return an empty string", () => {
        expect(result.values).toEqual([])
      });
    });
    describe("When the first list is null", () => {
      beforeEach(() => {
        l2 = new SinglyLinkedList([1]);
        result = mergeLists(l1, l2);
      });
      it("should return the elements from l2", () => {
        expect(result.values).toEqual([1]);
      });
    });
    describe("When both lists have sorted values", ()=>{
      beforeEach(()=>{
        l1 = new SinglyLinkedList([1, 2, 3]);
        l2 = new SinglyLinkedList([3, 4]);
        result = mergeLists(l1, l2)
      })
      it("should return a list with the values in sorted order", ()=>{
        expect(result.values).toEqual([1,2,3,3,4]);
      })
    })
    describe("When the lists have unsorted values", ()=>{
      beforeEach(()=>{
        l1 = new SinglyLinkedList([9,1, 4, 2, 3]);
        l2 = new SinglyLinkedList([3, 2]);
        result = mergeLists(l1, l2)
      })
      it("should return a list with the values in sorted order", ()=>{
        expect(result.values).toEqual([1,2,2,3,3,4,9]);
      })
    })
  });
});
