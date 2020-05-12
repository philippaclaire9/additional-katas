const { multiplicationTable } = require('../multiplicationTable');

describe('multiplicationTable()', () => {
  it('returns an empty array when passed 0', () => {
    expect(multiplicationTable(0)).toEqual([]);
  });
  it('returns multiplication table for 1', () => {
    expect(multiplicationTable(1)).toEqual([
      [0, 1],
      [1, 1],
    ]);
  });
  it('returns multiplication table for 2', () => {
    expect(multiplicationTable(2)).toEqual([
      [0, 1, 2],
      [1, 1, 2],
      [2, 2, 4],
    ]);
  });
  it('returns multiplication table for 3', () => {
    expect(multiplicationTable(3)).toEqual([
      [0, 1, 2, 3],
      [1, 1, 2, 3],
      [2, 2, 4, 6],
      [3, 3, 6, 9],
    ]);
  });
  it('returns multiplication table for 4', () => {
    expect(multiplicationTable(4)).toEqual([
      [0, 1, 2, 3, 4],
      [1, 1, 2, 3, 4],
      [2, 2, 4, 6, 8],
      [3, 3, 6, 9, 12],
      [4, 4, 8, 12, 16],
    ]);
  });
});
