function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const indexChars = (s: string): Map<string, number> => {
    const sMap = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      let times = sMap.get(c) || 0;
      sMap.set(c, times + 1);
    }
    return sMap;
  };
  const sMap = indexChars(s);
  const tMap = indexChars(t);
  for (let [k, v] of sMap.entries()) {
    if (tMap.get(k) !== v) {
      return false;
    }
  }
  return true;
}

export { isAnagram };
