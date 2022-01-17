function intersect(nums1:number[], nums2:number[]):number[] {
  const map1 = new Map<number, number>();
  const map2 = new Map<number, number>();  
  let result:number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    if (map1.has(nums1[i])) {
      map1.set(nums1[i], map1.get(nums1[i])! + 1);
    } else {
      map1.set(nums1[i], 1);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map2.has(nums2[i])) {
      map2.set(nums2[i], map2.get(nums2[i])! + 1);
    } else {
      map2.set(nums2[i], 1);
    }
  }
  for (let i = 0; i < nums1.length; i++) {
    if (map2.has(nums1[i]) && map1.get(nums1[i])! <= map2.get(nums1[i])!) {
      result.push(nums1[i]);
    }
  }

  return result
}

export {intersect}