

function minBribes(q: number[]): number {
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    // if the person is too far to the right, then they must have gone too far and there is no solution
    if (q[i] - (i + 1) > 2) {
      return -1;
    }
    // for each person, check if they have moved more than 2 places
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      // if the person is behind the person in front of them
      if (q[j] > q[i]) {
        // increment bribes
        bribes++;
      }
    }
  }
  return bribes;
}
export { minBribes };