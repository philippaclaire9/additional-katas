// Please do not change the name of this function
const crackCode = (encryptedKey) => {
  if (!encryptedKey) return false;

  const splitKey = encryptedKey.split('-');

  //console.log(splitKey);

  const removedBrackets = splitKey.slice(0, -5);
  console.log(removedBrackets);

  const code = encryptedKey.slice(-5, -1).split('');

  let count = 0;

  const alphabeticalCode = [...code].sort();
  // console.log(alphabeticalCode, code);
  //console.log(alphabeticalCode.join(''), code.join(''), 'joined');
  //console.log(code.sort());
  const keyObject = {};

  //console.log([...code].sort().join(''));

  if (alphabeticalCode.join('') !== code.join('')) {
    return false;
  } else {
    splitKey.forEach((element) => {
      keyObject[element[0]] = element.length;
      // if (element[0] === letter) {
      //   count++;
      // }
    });
  }
  console.log(keyObject);
  for (key in keyObject) {
    if (keyObject[key] > 0) {
      count = keyObject[key];
    }
  }

  // console.log(keyObject);
  // console.log(count, 'count');
  // if (count === code.length) {
  //   return true;
  // }
  //console.log(code.length);
};

module.exports = { crackCode };
