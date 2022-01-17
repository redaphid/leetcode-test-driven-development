function intersect(nums1:number[], nums2:number[]):number[] {
  const map1 = new Map<number, number>();
  const map2 = new Map<number, number>();    
  const maxLength = Math.max(nums1.length, nums2.length);
  for(let i=0; i < maxLength; i++) {
    if(i < nums1.length) {
      map1.set(nums1[i], (map1.get(nums1[i]) || 0) + 1);
    }
    if(i < nums2.length) {
      map2.set(nums2[i], (map2.get(nums2[i]) || 0) + 1);
    }
  }
  let result:number[] = [];
  for(let [k,timesSeen] of  map1.entries()) {
    const timesSeen2 =  map2.get(k)
    if(!timesSeen2) {
      continue;
    }
    let minTimesSeen = Math.min(timesSeen, timesSeen2);
    result = [...result, ...new Array(minTimesSeen).fill(k)];
  }
  return result;
}

export {intersect}