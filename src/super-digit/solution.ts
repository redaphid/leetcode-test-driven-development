
  function parseOrThrow(s:string){
    const result = parseInt(s)
    if(isNaN(result)) throw new Error(`${s} is not a number`)
    return result
  }

  function addDigits(n: string): number {
    let result = 0
    // console.log(`input: ${n}`)
    for(let i = 0; i < n.length; i++) {
      result += parseOrThrow(n[i])
    }
    // console.log(`output: ${result}`)
    return result
  }

  function oldSuperDigit(s:string, k:number) {
    if(s.length === 1) return parseOrThrow(s)
    let sArray = new Array(k).fill(s)
    let result = sArray.join('')
    while(result.length > 1) {
      result = addDigits(result).toString()
    }
    return parseOrThrow(result)
  }
  
    function newSuperDigit(s:string, k:number) {

      if(s.length === 1) return parseOrThrow(s)

      let rs = s.slice()
      while(rs.length > 1) {
        rs = addDigits(rs).toString()
      }
      let result = parseOrThrow(rs)
      for(let m = k-1; m > 0; m--) {  
        result += newSuperDigit(s, 1)      
      }
      console.log(`newSuperDigit(s: ${s}, k: ${k}) = ${result}`)
      return newSuperDigit(result.toString(), 1)  
    }


  export {oldSuperDigit, newSuperDigit}

  
