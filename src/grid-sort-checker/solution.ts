
  function _gridsortchecker(grid: string[][]): boolean {
    for(let row of grid){
      row = row.sort()    
    }
    for(let i =0; i < grid.length; i++){
      const col = grid.map(row => row[i])
      const sortedCol = [...col].sort()
      if(col.join('') !== sortedCol.join('')){
        return false
      }
    }
    return true 
  }

  function gridStringToGrid(grid:string[]): string[][]{
    return grid.map(row => row.split(''))
  }
  export {_gridsortchecker, gridStringToGrid}

  
