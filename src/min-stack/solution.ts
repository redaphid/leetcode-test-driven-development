class MinStack {
  constructor() {}
  vals: number[] = []
  mins: number[] = []

  push(val: number): void {
    this.vals.push(val)
    this.mins = [...this.vals].sort((a, b) => a - b)
  }

  pop(): void {
    this.vals.pop()
    this.mins = [...this.vals].sort((a, b) => a - b)
  }

  top(): number {
    return this.vals[this.vals.length - 1]
  }

  getMin(): number {
    if(this.mins.length === 0) return Infinity
    return this.mins[0]
  }
}
export { MinStack };
