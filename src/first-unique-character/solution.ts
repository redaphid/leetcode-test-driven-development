function firstUniqChar(s: string): number {
  type CharInfo = {
    index: number,
    times : number
  }
  const charMap = new Map<string, CharInfo>()  
  for(let i = 0; i < s.length; i++) {
    const currentChar = s[i]
    const charInfo = charMap.get(currentChar) || {
      index: i,
      times: 0
    }
    charInfo.times++
    charMap.set(currentChar, charInfo) 
  }
  let minIndex = -1
  for (let [k,v] of charMap.entries()) {
    if(v.times > 1) continue
    if(minIndex === -1) minIndex = v.index
      minIndex = Math.min(minIndex, v.index)    
  }
  return minIndex
} 





export {firstUniqChar}
