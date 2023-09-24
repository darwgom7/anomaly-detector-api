export const hasAnomaly = (dna: string[][]): boolean => {
  const MIN_SEQ_LENGTH = 3; 
  
  const rows = dna.length;
  if (rows === 0) return false;
  
  const cols = dna[0].length;

  const directionToString = (row: number, col: number, dx: number, dy: number): string => {
    let str = "";
    for (let x = row, y = col; x >= 0 && x < rows && y >= 0 && y < cols; x += dx, y += dy) {
      str += dna[x][y];
    }
    return str;
  };

  const regex = new RegExp(`([a-zA-Z])\\1{${MIN_SEQ_LENGTH - 1},}`);

  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [-1, 1]
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      for (const [dx, dy] of directions) {
        const dirString = directionToString(row, col, dx, dy);
        if (regex.test(dirString)) {
          return true;
        }
      }
    }
  }

  return false;
};


