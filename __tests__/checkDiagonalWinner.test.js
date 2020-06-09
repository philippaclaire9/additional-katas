const { checkDiagonalWinner } = require('../checkDiagonalWinner');

describe('checkDiagonalWinner()', () => {
  it('returns Please provide a 7 * 6 matrix if no matrix provided ', () => {
    expect(checkDiagonalWinner([])).toEqual('Please provide a 7 * 6 matrix');
  });
  it('returns Please provide a 7 * 6 matrix if matrix is not 7 * 6 ', () => {
    expect(
      checkDiagonalWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual('Please provide a 7 * 6 matrix');
    expect(
      checkDiagonalWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual('Please provide a 7 * 6 matrix');
  });
  it('returns false if no winner when no counters', () => {
    expect(
      checkDiagonalWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual(false);
  });
  it('returns false if no winner when 4 in a row across', () => {
    expect(
      checkDiagonalWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 'x', 'x', 'x', 'x', null, null],
      ])
    ).toEqual(false);
  });
  it('returns false if no winner when 4 in a row down', () => {
    expect(
      checkDiagonalWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 'o', null, null, null, null, null],
        [null, 'o', null, null, null, null, null],
        [null, 'o', null, null, null, null, null],
        [null, 'o', null, null, null, null, null],
      ])
    ).toEqual(false);
  });
  it('returns true when 4 in a row diagonally', () => {
    expect(
      checkDiagonalWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'x', null, null, null],
        [null, null, 'x', null, null, null, null],
        [null, 'x', null, null, null, null, null],
        ['x', null, null, null, null, null, null],
      ])
    ).toEqual(true);
  });
  it('returns true when 4 in a row diagonally', () => {
    expect(
      checkDiagonalWinner([
        [null, 'o', null, null, null, null, null],
        [null, null, 'o', null, null, null, null],
        [null, null, null, 'o', null, null, null],
        [null, null, null, null, 'o', null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual(true);
  });
  it('returns false when mixed counters make 4 in a row diagonally', () => {
    expect(
      checkDiagonalWinner([
        [null, 'o', null, null, null, null, null],
        [null, null, 'x', null, null, null, null],
        [null, null, null, 'x', null, null, null],
        [null, null, null, null, 'o', null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual(false);
  });
});
