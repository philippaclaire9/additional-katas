// Please do not change the name of this function
const checkDiagonalWinner = (board) => {
  if (!board.length) return 'Please provide a 7 * 6 matrix';
  if (board.length !== 6) return 'Please provide a 7 * 6 matrix';
  let invalidBoard = false;
  let diagonalWinner = false;

  board.forEach((array) => {
    if (array.length !== 7) {
      invalidBoard = true;
    }
  });
  if (invalidBoard) return 'Please provide a 7 * 6 matrix';

  let count = 0;
  let valueIndex = 0;
  let arrayIndex = 0;
  let letter = '';
  let counterCount = 0;

  const isNotNull = (value) => value !== null;
  const letterIndexArray = [];

  board.forEach((array) => {
    if (board.indexOf(array) !== 0) {
      arrayIndex++;
    }
    if (!array.includes('x') && !array.includes('o')) {
      count++;
    } else {
      valueIndex = array.findIndex(isNotNull);
      if (!letter) {
        letter = array[valueIndex];
      }
      if (array[valueIndex] === letter) {
        letterIndexArray.push(valueIndex);
      } else {
        invalidBoard = true;
      }

      if (array[valueIndex + 1] !== null) {
        invalidBoard = true;
      }

      if (board[arrayIndex][valueIndex] === letter) {
        counterCount++;
        if (counterCount === 4) {
          invalidBoard = true;
        }
      }
    }
  });
  const differenceArray = letterIndexArray.map(function (n, i) {
    if (i !== letterIndexArray.length - 1) {
      return n - letterIndexArray[i + 1];
    }
    if (letterIndexArray[0] > letterIndexArray[letterIndexArray.length - 1]) {
      return 1;
    } else {
      return -1;
    }
  });

  const isDifferencePos = differenceArray.every((value) => value == 1);
  const isDifferenceNeg = differenceArray.every((value) => value == -1);

  if (differenceArray.length === 4 && isDifferenceNeg) return true;
  if (differenceArray.length === 4 && isDifferencePos) return true;

  if (diagonalWinner) return true;

  if (invalidBoard) return false;

  if (count === 6) return false;
};

module.exports = { checkDiagonalWinner };
