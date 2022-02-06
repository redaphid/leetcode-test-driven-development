
  function addDigits(n: string): number {
    let result = 0
    console.log(`input: ${n}`)
    for(let i = 0; i < n.length; i++) {
      result += parseInt(n[i])
    }
    console.log(`output: ${result}`)
    return result
  }
  function superdigit(s:string, k:number) {
    console.log(`s: ${s}, k: ${k}`)
    // return 0
    if(s.length === 1) return parseInt(s)
    let sArray = new Array(k).fill(s)
    console.log({sArray})
    let result = sArray.join('')
    while(result.length > 1) {
      result = addDigits(result).toString()
    }
  

    return parseInt(result)
  }
  export {superdigit}

  
