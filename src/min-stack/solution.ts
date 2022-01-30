class MinStack {
  constructor() {}
  vals: number[] = []

  push(val: number): void {
    this.vals.push(val)
    console.log(this.vals)
    this.vals.sort((a, b) =>  a - b)
    console.log(this.vals)
  }

  pop(): void {
    this.vals.shift()
    console.log(this.vals)
  }

  top(): number {
    return this.vals[this.vals.length - 1]
  }

  getMin(): number {
    return this.vals[0]
  }
}
export { MinStack };
