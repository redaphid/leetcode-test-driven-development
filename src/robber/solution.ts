function rob(houses: number[]): number {
  let viableOptions: Set<number[]> = new Set();

  const addIfViable = (i: number) => {
    viableOptions.forEach((v) => {
      console.log(`${v} + ${houses[i]}`);
      if (v.includes(i)) return true;
      if (v.includes(i + 1)) return true;
      if (v.includes(i - 1)) return true;
      viableOptions.add([...v, i]);
      v.sort();
    });
  };
  for (let i = 0; i < houses.length; i++) {
    viableOptions.add([i]);
    addIfViable(i);
  }
  let max = -Infinity;
  console.table(viableOptions);
  viableOptions.forEach((option) => {
    const val = option
      .map((i) => {
        // console.log({ i, houses: houses[i] });
        return houses[i];
      })
      .reduce((a, b) => a + b);    
    max = Math.max(max, val);
  });
  return max; // return max
}
export { rob };
