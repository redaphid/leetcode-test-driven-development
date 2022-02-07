

function minBribes(q: number[]): number {
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      return -1;
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }
  return bribes;
}
export { minBribes };