// Please do not change the name of this function
const wrongWayCow = (field) => {
  const woc = RegExp('woc', 'g');
  const cow = RegExp('cow', 'g');
  const multipleFields = RegExp('\\\\n', 'g');
  //console.log(multipleFields);

  let cowCount = 0;
  let wocCount = 0;

  const splitFieldCow = field.split('cow');
  const splitFieldWoc = field.split('woc');
  const splitFields = field.split('\\n');
  // console.log(splitFields);
  //console.log(multipleFields.test(field));

  if (multipleFields.test(field)) {
    splitFields.forEach((separatedField) => {
      const splitSeparatedFieldCow = separatedField.split('cow');
      const splitSeparatedFieldWoc = separatedField.split('woc');
      console.log(splitSeparatedFieldCow, 'cow');
      console.log(splitSeparatedFieldWoc, 'woc');
      if (woc.test(separatedField) && cow.test(separatedField)) {
        // console.log(splitFieldCow, 'cow');
        // console.log(splitFieldWoc, 'woc');

        splitSeparatedFieldCow.forEach((cowWord) => {
          if (!cowWord.length) {
            cowCount++;
          }
        });
        splitSeparatedFieldWoc.forEach((wocWord) => {
          if (!wocWord.length) {
            wocCount++;
          }
        });
      } else {
        return [];
      }
      //console.log(wocCount, 'woc');
      //console.log(cowCount, 'cow');
      const cowIndex = splitSeparatedFieldWoc.findIndex(
        (isCow) => isCow === 'cow'
      );
      const wocIndex = splitSeparatedFieldCow.findIndex(
        (isWoc) => isWoc === 'woc'
      );

      if (wocCount > cowCount) {
        return [0, cowIndex];
      }
      if (cowCount > wocCount) {
        return [0, wocIndex];
      }
    });
  }

  if (woc.test(field) && cow.test(field)) {
    // console.log(splitFieldCow, 'cow');
    // console.log(splitFieldWoc, 'woc');

    splitFieldCow.forEach((cowWord) => {
      if (!cowWord.length) {
        cowCount++;
      }
    });
    splitFieldWoc.forEach((wocWord) => {
      if (!wocWord.length) {
        wocCount++;
      }
    });
  } else {
    return [];
  }
  //console.log(wocCount, 'woc');
  //console.log(cowCount, 'cow');
  const cowIndex = splitFieldWoc.findIndex((isCow) => isCow === 'cow');
  const wocIndex = splitFieldCow.findIndex((isWoc) => isWoc === 'woc');

  if (wocCount > cowCount) {
    return [0, cowIndex];
  }
  if (cowCount > wocCount) {
    return [0, wocIndex];
  }
};

module.exports = { wrongWayCow };
