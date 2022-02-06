
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
      console.log(`newSuperDigit s: ${s}, k: ${k}`)
      // if(k === 0) return 0
      if(k === 0) throw new Error(`k must be greater than 0, ${s} ${k}`)
      if(s.length === 1 && k === 1) return parseOrThrow(s)

      let rs = s.slice()
      while(rs.length > 1) {
        rs = addDigits(rs).toString()
      }
      let resI = parseOrThrow(rs)
      console.log(`result: ${resI}`)
      const recurseResult = resI
      const rrs = (recurseResult+'').length
      if(rrs === 1) return recurseResult
      return newSuperDigit(recurseResult+'', 1)       
    }


  export {oldSuperDigit, newSuperDigit}

  
