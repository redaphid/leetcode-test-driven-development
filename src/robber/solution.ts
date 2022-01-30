function rob(houses: number[]): number {
  let viableOptions: Set<number[]> = new Set();

  const addIfViable = (i: number) => {
    viableOptions.forEach((v) => {
      if (v.includes(i)) return true;
      if (v.includes(i + 1)) return true;
      if (v.includes(i - 1)) return true;
      viableOptions.add([...v, i]);
    });
  };
  for (let i = 0; i < houses.length; i++) {
    viableOptions.add([i]);
    addIfViable(i);
  }
  let max = -Infinity;
  
  viableOptions.forEach((option) => {
    const val = option
      .map((i) => {
        return houses[i];
      })
      .reduce((a, b) => a + b);    
    max = Math.max(max, val);
  });
  return max; // return max
}
export { rob };
