function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const combined = [
    ...nums1.slice(0,m),
    ...nums2
  ].sort((a,b) => a-b)
  for(let i = 0; i < combined.length; i++) {
    nums1[i] = combined[i]
  }
}
export {merge}