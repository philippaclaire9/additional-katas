// Please do not change the name of this function
const findConnectFourWinner = (board) => {
  if (!board.length) return 'Please provide a 7 * 6 matrix';
  if (board.length !== 6) return 'Please provide a 7 * 6 matrix';
  let invalidBoard = false;

  board.forEach((array) => {
    if (array.length !== 7) {
      invalidBoard = true;
    }
  });
  if (invalidBoard) return 'Please provide a 7 * 6 matrix';

  // console.log(
  //   board.length,
  //   board.length !== 6,
  //   !board.every((array) => array.length === 7)
  // );
  // if (
  //   !board.length ||
  //   board.length !== 6 ||
  //   !board.every((array) => {
  //     array.length === 7;
  //   })
  // )
  //   return 'Please provide a 7 * 6 matrix';

  let nullCount = 0;
  let arrayIndex = 0;

  let xIndex = 0;
  let oIndex = 0;

  const isX = (value) => value === 'x';
  const isO = (value) => value === 'o';

  board.forEach((array) => {
    if (board.indexOf(array) !== 0) {
      arrayIndex++;
      if (!array.includes('x') && !array.includes('o')) {
        nullCount++;
      } else {
        xIndex = array.findIndex(isX);
        oIndex = array.findIndex(isO);
        console.log('x >>>>', xIndex, oIndex, '<<<< o');
      }
    }
  });

  if (nullCount === 5) return false;

  board.forEach;
};

module.exports = { findConnectFourWinner };
