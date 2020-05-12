// Please do not change the name of this function
const multiplicationTable = (num) => {
  if (num === 0) return [];
  const listOfNums = [];
  const matrixArray = [];

  for (let i = 0; i <= num; i++) {
    listOfNums.push(i);
  }

  matrixArray.push(listOfNums);

  const multipliedNums = [];

  listOfNums.forEach((numero) => {
    if (numero !== 0) {
      const embeddedArray = [];

      embeddedArray.push(numero);

      listOfNums.forEach((number) => {
        if (number !== 0) {
          embeddedArray.push(numero * number);
        }
      });

      matrixArray.push(embeddedArray);
    }
  });

  return matrixArray;
};

module.exports = { multiplicationTable };
