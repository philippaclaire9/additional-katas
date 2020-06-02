// Please do not change the name of this function
const checkDiagonalWinner = (board) => {
  if (!board.length) return 'Please provide a 7 * 6 matrix';
  if (board.length !== 6) return 'Please provide a 7 * 6 matrix';
  let invalidBoard = false;

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

  board.forEach((array) => {
    if (board.indexOf(array) !== 0) {
      arrayIndex++;
    }
    if (!array.includes('x') && !array.includes('o')) {
      count++;
    } else {
      const isNotNull = (value) => value !== null;
      valueIndex = array.findIndex(isNotNull);
      letter = array[valueIndex];

      if (array[valueIndex + 1] !== null) {
        invalidBoard = true;
      }
      //console.log(board[arrayIndex + 1][valueIndex] === letter, 'letter?');
      // console.log(board[arrayIndex] !== 5, 'five?');
      if (
        board[arrayIndex] < 5 &&
        board[arrayIndex + 1][valueIndex] === letter
      ) {
        console.log('here?');
        invalidBoard = true;
      }
    }

    //if(array[valueIndex] !== null && array )
  });

  if (invalidBoard) return false;

  if (count === 6) return false;
};

module.exports = { checkDiagonalWinner };
