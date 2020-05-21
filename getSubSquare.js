// Please do not change the name of this function
const getSubSquare = (matrix, xStartIndex, yStartIndex) => {
  if (!matrix.length) return 'Please provide a matrix';
  if (xStartIndex === null) return 'Please provide an xStartIndex';
  if (yStartIndex === null) return 'Please provide an yStartIndex';

  const array1 = [];
  const array2 = [];
  const array3 = [];

  matrix.forEach((row) => {
    if (row === matrix[yStartIndex]) {
      row.forEach((number) => {
        if (number === row[xStartIndex]) {
          array1.push(number);
        }
        if (number === row[xStartIndex + 1]) {
          array1.push(number);
        }
        if (number === row[xStartIndex + 2]) {
          array1.push(number);
        }
      });
    }
    if (row === matrix[yStartIndex + 1]) {
      row.forEach((number) => {
        if (number === row[xStartIndex]) {
          array2.push(number);
        }
        if (number === row[xStartIndex + 1]) {
          array2.push(number);
        }
        if (number === row[xStartIndex + 2]) {
          array2.push(number);
        }
      });
    }
    if (row === matrix[yStartIndex + 2]) {
      row.forEach((number) => {
        if (number === row[xStartIndex]) {
          array3.push(number);
        }
        if (number === row[xStartIndex + 1]) {
          array3.push(number);
        }
        if (number === row[xStartIndex + 2]) {
          array3.push(number);
        }
      });
    }
  });

  return [array1, array2, array3];
};

module.exports = { getSubSquare };
