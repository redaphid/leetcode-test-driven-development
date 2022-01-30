const getScore = (option:number[], houses:number[]) => {
  return option.map(i => houses[i]).reduce((a, b) => a + b, 0);
}
function rob(houses: number[]): number {
  let viableOptions: Set<number[]> = new Set();

  let score = 0
  const addIfViable = (i: number) => {
    viableOptions.forEach((v) => {
      score = Math.max(score, getScore(v, houses));
      if (v.includes(i)) return true;
      if (v.includes(i + 1)) return true;
      if (v.includes(i - 1)) return true;
      viableOptions.add([...v, i]);
      score = Math.max(score, getScore(v, houses));
    });
  };
  for (let i = 0; i < houses.length; i++) {
    viableOptions.add([i]);
    addIfViable(i);
  }    
  return score; // return max
}
export { rob };
