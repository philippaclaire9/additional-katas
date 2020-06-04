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
  let diagonalCounter = 0;
  let diagonalIndex = 0;
  let diagonalArray = 0;

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
      if (board[arrayIndex][valueIndex] === letter) {
        counterCount++;
        if (counterCount === 4) {
          invalidBoard = true;
        }
        // console.log(arrayIndex + 1);
        //console.log(board[arrayIndex + 1]);
        //console.log('here?');
        // console.log(secondInvalidBoard, 'pre');
        //secondInvalidBoard = true;
        // console.log(secondInvalidBoard, 'post');
      }

      //console.log(board[arrayIndex + 1][valueIndex - 1] === letter, valueIndex);
      if (
        valueIndex !== 0 &&
        board[arrayIndex + 1][valueIndex - 1] === letter
      ) {
        diagonalCounter++;
        //console.log(diagonalCounter);
        if (diagonalCounter === 3) {
          diagonalWinner = true;
        }
      }
      console.log(valueIndex === 1, board[arrayIndex + 1][0] === letter);
      if (valueIndex === 1 && board[arrayIndex + 1][0] === letter) {
        diagonalCounter++;
        diagonalWinner = true;
        console.log(diagonalCounter, 'counter?');
      }
    }

    //if(array[valueIndex] !== null && array )
  });

  //console.log(secondInvalidBoard);
  if (diagonalWinner) return true;

  if (invalidBoard) return false;

  if (count === 6) return false;
};

module.exports = { checkDiagonalWinner };
