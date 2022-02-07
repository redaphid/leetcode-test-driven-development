function flipmatrix() {
  throw new Error("This solution has not been implemented yet.");
}

function flipRow(matrix: number[][], r: number) {
  const row = matrix[r];
  row.reverse();
  return matrix;
}

function getColumn(matrix: number[][], c: number) {
  return matrix.map((row) => row[c]);
}

function flipColumn(matrix: number[][], c: number) {
  const col = getColumn(matrix, c).reverse();
  for (let r = 0; r < matrix.length; r++) {
    const row = matrix[r];
    row[c] = col[r];
  }

  return matrix;
}

function createNumberMap(len: number): Set<number>[][] {
  const numberMap = new Array(len)
    .fill(0)
    .map((_) => new Array(len).fill(new Set<number>()));
  return numberMap;
}

function addCellsToMap(numberMap: Set<number>[][], matrix: number[][]) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      const value = matrix[r][c];
      numberMap[r][c].add(value);
    }
  }
}

function getAllowedCells(numberMap: Set<number>[][], val: number) {
  const cellMatrix = numberMap.map((row) =>
    row.map((col) => (col.has(val) ? val.toString() : "--"))
  );
  console.log(cellMatrix);
}

function flipRandomly(matrix: number[][]) {
  const times = 100;
  const numberMap = createNumberMap(matrix.length);
  for (let i = 0; i < times; i++) {
    const rowOrCol = Math.random() < 0.5;
    if (rowOrCol) {
      const row = Math.floor(Math.random() * matrix.length);
      flipRow(matrix, row);
    } else {
      const col = Math.floor(Math.random() * matrix[0].length);
      flipColumn(matrix, col);
    }
    console.table(matrix);
    addCellsToMap(numberMap, matrix);
  }

  // const allowedCells = getAllowedCells(numberMap, 10);
  // console.table(allowedCells);
  return numberMap;
}

export {
  flipmatrix,
  flipRandomly,
  flipRow,
  flipColumn,
  getColumn,
  getAllowedCells,
};
